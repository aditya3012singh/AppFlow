import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

/**
 * @route POST /api/team/:workspaceId/add
 * @desc Add a member to the workspace
 * @access Protected
 */
router.post("/:workspaceId/add", authMiddleware, async (req, res) => {
  const { workspaceId } = req.params;
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: "Email and role are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Prevent adding the same member twice
    const existing = await prisma.workspaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user.id,
          workspaceId,
        },
      },
    });

    if (existing) return res.status(409).json({ message: "User is already a member of the workspace" });

    const member = await prisma.workspaceMember.create({
      data: {
        userId: user.id,
        workspaceId,
        role,
      },
    });

    res.status(201).json({ message: "Member added", member });
  } catch (err) {
    console.error("Error adding member:", err);
    res.status(500).json({ message: "Failed to add member" });
  }
});


router.get("/:workspaceId", authMiddleware, async (req, res) => {
  const { workspaceId } = req.params;

  try {
    const members = await prisma.workspaceMember.findMany({
      where: { workspaceId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.status(200).json({ members });
  } catch (err) {
    console.error("Error fetching team members:", err);
    res.status(500).json({ message: "Failed to fetch team members" });
  }
});


router.delete("/:workspaceId/remove/:userId", authMiddleware, async (req, res) => {
  const { workspaceId, userId } = req.params;

  try {
    await prisma.workspaceMember.delete({
      where: {
        userId_workspaceId: {
          userId,
          workspaceId,
        },
      },
    });

    res.status(200).json({ message: "Member removed from workspace" });
  } catch (err) {
    console.error("Error removing member:", err);
    res.status(500).json({ message: "Failed to remove member" });
  }
});


router.put("/:workspaceId/role/:userId", authMiddleware, async (req, res) => {
  const { workspaceId, userId } = req.params;
  const { role } = req.body;

  if (!role) return res.status(400).json({ message: "Role is required" });

  try {
    const updated = await prisma.workspaceMember.update({
      where: {
        userId_workspaceId: {
          userId,
          workspaceId,
        },
      },
      data: { role },
    });

    res.status(200).json({ message: "Role updated", updated });
  } catch (err) {
    console.error("Error updating member role:", err);
    res.status(500).json({ message: "Failed to update role" });
  }
});

export default router;
