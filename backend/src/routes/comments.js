import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route POST /api/comment
 * @desc Add a comment to a task
 * @access Protected
 */
router.post("/", authMiddleware, async (req, res) => {
  const { content, taskId } = req.body;
  const userId = req.user.id;

  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        taskId,
        authorId: userId,
      },
    });

    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ message: "Failed to add comment" });
  }
});

/**
 * @route GET /api/comment/:taskId
 * @desc Get all comments for a task
 * @access Protected
 */
router.get("/:taskId", authMiddleware, async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { taskId: req.params.taskId },
      orderBy: { createdAt: "asc" },
      include: {
        author: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    console.error("Fetch comments error:", error);
    res.status(500).json({ message: "Failed to fetch comments" });
  }
});

/**
 * @route DELETE /api/comment/:id
 * @desc Delete a comment
 * @access Protected
 */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await prisma.comment.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Delete comment error:", error);
    res.status(500).json({ message: "Failed to delete comment" });
  }
});

export default router;
