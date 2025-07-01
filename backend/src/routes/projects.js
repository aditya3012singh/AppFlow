import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

// Create a new project in a workspace
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, workspaceId } = req.body;

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        workspaceId,
      },
    });

    res.status(201).json({ project });
  } catch (err) {
    console.error("Create project error:", err);
    res.status(500).json({ message: "Failed to create project" });
  }
});

// Get all projects for a workspace
router.get("/workspace/:workspaceId", authMiddleware, async (req, res) => {
  const { workspaceId } = req.params;

  try {
    const projects = await prisma.project.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ projects });
  } catch (err) {
    console.error("Fetch projects error:", err);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

// Get single project by ID
router.get("/:projectId", authMiddleware, async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ project });
  } catch (err) {
    console.error("Fetch project error:", err);
    res.status(500).json({ message: "Failed to fetch project" });
  }
});

export default router;
