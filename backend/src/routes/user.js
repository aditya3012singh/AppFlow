import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { PrismaClient } from '@prisma/client';
import Redis from "ioredis";
import { loginSchema, signupSchema, updateProfileSchema } from "../validators/validate.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { otpRateLimiter } from "../middlewares/rateLimiter.js";

dotenv.config();

const router = express.Router()

const prisma=new PrismaClient()
const redis = new Redis(process.env.REDIS_URL);
redis.on("error", (err) => {
    console.error("Redis connection error:", err);
});
redis.ping().then(console.log)

const transporter=nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

router.post("/signup", async (req, res) => {
  try {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(403).json({ errors: parsed.error.errors });
    }

    const { email: rawEmail, name, password} = parsed.data;
    const email = rawEmail.toLowerCase(); // 🔥 Normalize email early

      // Use lowercased email consistently below
      const isVerified = await redis.get(`verified:${email}`);

    console.log("Checking verified status for:", email);
    console.log("Verified value in Redis:", isVerified);
    if (!isVerified) {
       return res.status(403).json({ message: "Please verify your email via OTP before signing up." });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      },
    });

    const token = jwt.sign({ 
        id: user.id, 
        role: user.role },
        process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    await redis.del(`verified:${email}`);

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
    });
  } catch (e) {
    console.log(e)
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/generate-otp", otpRateLimiter, async (req,res)=>{
    const email=req.body.email?.toLowerCase()

    const otp=Math.floor(100000 + Math.random() * 900000).toString();
    console.log("otp : ",otp)
    try{
        const result=await redis.set(`otp:${email}`, otp, "Ex",600)
        console.log("✅ Redis SET result:", result)

        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Your Otp Code",
            text:`Your Verification Code is ${otp}`
        })
        console.log("otp sent to : ",email)
        res.json({ message: "OTP sent to email!" });
    } catch (error) {
        console.log("hello")
        console.error("OTP error:", error);
        res.status(500).json({ message: "Failed to send OTP" });
    }
})


router.post("/verify-otp", async (req,res)=>{
    const email=req.body.email?.toLowerCase()
    const otp=req.body.otp
    try{
        const storedOtp= await redis.get(`otp:${email}`)
        console.log("✅ Email:", email);
        console.log("✅ Sent OTP code:", otp);
        console.log("✅ Stored OTP from Redis:", storedOtp);
    if (!storedOtp || storedOtp !== otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    await redis.del(`otp:${email}`);
    await redis.set(`verified:${email}`, "true", "EX", 600);

    return res.json({ message: "OTP verified. You can now sign up." });
  } catch (error) {
    console.error("OTP verification failed:", error);
    return res.status(500).json({ message: "Failed to verify OTP." });
  }
})

router.get("/check-user", async (req, res) => {
  const email = req.query.email?.toString().toLowerCase();

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    res.status(200).json({ exists: !!existingUser });
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.errors, message: "Invalid credentials" });
    }

    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email },
    });

    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(parsed.data.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    // Return user without password
    const { password, ...userWithoutPassword } = user;

    res.json({
      message: "Login successful",
      jwt: token,
      user: userWithoutPassword, // 👈 now frontend gets proper user object
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed due to server error" });
  }
});


router.get("/me", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Comes from authMiddleware

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ message: "Failed to fetch user info" });
  }
});

router.put("/update-profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const parsed = updateProfileSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.errors });
    }

    const { name, password } = parsed.data;
    const updateData = {};

    if (name) updateData.name = name;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;