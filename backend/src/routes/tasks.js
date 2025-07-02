import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { io } from "../index.js";

const prisma = new PrismaClient();
const router = express.Router();


router.post("/", authMiddleware, async (req, res) => {
  const { title, description, columnId } = req.body;
  const userId = req.user.id;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        columnId,
        authorId: userId,
      },
    });
      io.emit(`notification:${assignedUserId}`, {
      message: "New task assigned!"
    })

    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    console.error("Create task error:", err);
    res.status(500).json({ message: "Failed to create task" });
  }
});


router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: req.params.id },
      include: {
        labels: {
          include: {
            label: true,
          },
        },
        comments: {
          include: {
            author: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
    });

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    console.error("Fetch task error:", err);
    res.status(500).json({ message: "Failed to fetch task" });
  }
});


router.put("/:id", authMiddleware, async (req, res) => {
  const { title, description } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: req.params.id },
      data: { title, description },
    });

    res.json({ message: "Task updated", task: updatedTask });
  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).json({ message: "Failed to update task" });
  }
});


router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await prisma.task.delete({
      where: { id: req.params.id },
    });

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Delete task error:", err);
    res.status(500).json({ message: "Failed to delete task" });
  }
});

router.post("/:id/labels", authMiddleware, async (req, res) => {
  const { labelIds } = req.body; // array of label IDs

  try {
    const added = await Promise.all(
      labelIds.map((labelId) =>
        prisma.taskLabel.upsert({
          where: {
            taskId_labelId: {
              taskId: req.params.id,
              labelId,
            },
          },
          update: {},
          create: {
            taskId: req.params.id,
            labelId,
          },
        })
      )
    );

    res.json({ message: "Labels added", added });
  } catch (err) {
    console.error("Add labels error:", err);
    res.status(500).json({ message: "Failed to add labels" });
  }
});


router.post("/:id/comment", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id;

  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        taskId: req.params.id,
        authorId: userId,
      },
    });

    res.status(201).json({ message: "Comment added", comment });
  } catch (err) {
    console.error("Comment error:", err);
    res.status(500).json({ message: "Failed to add comment" });
  }
});


router.put("/:id/move", authMiddleware, async (req, res) => {
  const { columnId } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: req.params.id },
      data: { columnId },
    });

    res.json({ message: "Task moved", task });
  } catch (err) {
    console.error("Move task error:", err);
    res.status(500).json({ message: "Failed to move task" });
  }
});

export default router;
