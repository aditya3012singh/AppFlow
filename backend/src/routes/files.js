import express from "express";
import { upload } from "../middlewares/s3Uploader.js"; // Multer + S3 config
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const userId = req.user.id;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const savedFile = await prisma.file.create({
      data: {
        name: file.originalname,
        url: file.location,
        userId,
      },
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: savedFile,
    });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({ message: "File upload failed" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const files = await prisma.file.findMany({
      where: { userId },
      orderBy: { uploadedAt: "desc" },
    });

    res.status(200).json({ files });
  } catch (error) {
    console.error("Fetch files error:", error);
    res.status(500).json({ message: "Failed to fetch files" });
  }
})

router.delete("/:id", authMiddleware, async (req, res) => {
  const fileId = req.params.id;
  const userId = req.user.id;

  try {
    const file = await prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!file || file.userId !== userId) {
      return res.status(404).json({ message: "File not found" });
    }

    // Optional: Delete from S3 as well
    // TODO: implement s3.deleteObject({ Bucket, Key }).promise()

    await prisma.file.delete({ where: { id: fileId } });

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Delete file error:", error);
    res.status(500).json({ message: "Failed to delete file" });
  }
});

export default router;
