import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const prisma = new PrismaClient();
const router = express.Router();

// Create a new workspace
router.post("/", authMiddleware, async (req, res) => {
  const { name } = req.body;
  const userId = req.user.id;

  try {
    const workspace = await prisma.workspace.create({
      data: {
        name,
        ownerId: userId,
        members: {
          create: {
            userId,
            role: "owner"
          }
        }
      },
    });

    res.status(201).json({ workspace });
  } catch (error) {
    console.error("Error creating workspace:", error);
    res.status(500).json({ message: "Failed to create workspace" });
  }
});

// Get all workspaces for user
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const memberships = await prisma.workspaceMember.findMany({
      where: { userId },
      include: {
        workspace: true
      }
    });

    const workspaces = memberships.map(m => m.workspace);

    res.json({ workspaces });
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    res.status(500).json({ message: "Failed to fetch workspaces" });
  }
});

// Get members of a workspace
router.get("/:workspaceId/members", authMiddleware, async (req, res) => {
  const { workspaceId } = req.params;

  try {
    const members = await prisma.workspaceMember.findMany({
      where: { workspaceId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    res.json({ members });
  } catch (error) {
    console.error("Error fetching members:", error);
    res.status(500).json({ message: "Failed to fetch members" });
  }
});

// Invite/add member
router.post("/:workspaceId/invite", authMiddleware, async (req, res) => {
  const { workspaceId } = req.params;
  const { email, role = "member" } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const existing = await prisma.workspaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user.id,
          workspaceId
        }
      }
    });

    if (existing) return res.status(409).json({ message: "User already a member" });

    const member = await prisma.workspaceMember.create({
      data: {
        userId: user.id,
        workspaceId,
        role
      }
    });

    res.status(201).json({ member });
  } catch (error) {
    console.error("Error inviting member:", error);
    res.status(500).json({ message: "Failed to invite member" });
  }
});

// Remove a member
router.delete("/:workspaceId/members/:userId", authMiddleware, async (req, res) => {
  const { workspaceId, userId } = req.params;

  try {
    await prisma.workspaceMember.delete({
      where: {
        userId_workspaceId: {
          userId,
          workspaceId
        }
      }
    });

    res.json({ message: "Member removed" });
  } catch (error) {
    console.error("Error removing member:", error);
    res.status(500).json({ message: "Failed to remove member" });
  }
});

export default router;
