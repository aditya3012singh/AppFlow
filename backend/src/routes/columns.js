import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

// Create new column
router.post("/", authMiddleware, async (req, res) => {
  const { name, position, projectId } = req.body;

  try {
    const project = await prisma.project.findUnique({ where: { id: projectId } });
    if (!project) return res.status(404).json({ message: "Project not found" });

    const column = await prisma.column.create({
      data: {
        name,
        position,
        projectId,
      },
    });

    res.status(201).json({ column });
  } catch (err) {
    console.error("Create column error:", err);
    res.status(500).json({ message: "Failed to create column" });
  }
});

// Get columns for a project
router.get("/:projectId", authMiddleware, async (req, res) => {
  const { projectId } = req.params;

  try {
    const columns = await prisma.column.findMany({
      where: { projectId },
      orderBy: { position: "asc" },
    });

    res.status(200).json({ columns });
  } catch (err) {
    console.error("Get columns error:", err);
    res.status(500).json({ message: "Failed to get columns" });
  }
});

// Update column (name or position)
router.put("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name, position } = req.body;

  try {
    const column = await prisma.column.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(position !== undefined && { position }),
      },
    });

    res.status(200).json({ column });
  } catch (err) {
    console.error("Update column error:", err);
    res.status(500).json({ message: "Failed to update column" });
  }
});

export default router;
