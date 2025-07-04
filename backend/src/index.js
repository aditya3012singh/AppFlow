import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

// Route Imports
import authRoutes from "./routes/user.js";
import workspaceRoutes from "./routes/workspaces.js";
import projectRoutes from "./routes/projects.js";
import columnRoutes from "./routes/columns.js";
import taskRoutes from "./routes/tasks.js";
import commentRoutes from "./routes/comments.js";
import labelRoutes from "./routes/labels.js";
import fileRoutes from "./routes/files.js";
import notificationRoutes from "./routes/notifications.js";
import teamRoutes from "./routes/team.js";
import oauthRoutes from "./routes/oauth.js";
import "./config/passport.js";
// Load .env variables
dotenv.config();

const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Prisma client
export const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io setup
io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth/oauth", oauthRoutes);
app.use("/api/v1/workspaces", workspaceRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/columns", columnRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/labels", labelRoutes);
app.use("/api/v1/files", fileRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/team", teamRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 AppFlow API is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
