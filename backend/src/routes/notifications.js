import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error("Fetch notifications error:", error);
    res.status(500).json({ message: "Failed to fetch notifications" });
  }
});


router.put("/:id/read", authMiddleware, async (req, res) => {
  try {
    const notification = await prisma.notification.update({
      where: { id: req.params.id },
      data: { read: true },
    });

    res.status(200).json({ message: "Notification marked as read", notification });
  } catch (error) {
    console.error("Mark notification read error:", error);
    res.status(500).json({ message: "Failed to mark notification as read" });
  }
});


router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await prisma.notification.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "Notification deleted" });
  } catch (error) {
    console.error("Delete notification error:", error);
    res.status(500).json({ message: "Failed to delete notification" });
  }
});

export default router;
