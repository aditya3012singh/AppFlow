 import express from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, color } = req.body;

    if (!name || !color) {
      return res.status(400).json({ message: "Name and color are required" });
    }

    const label = await prisma.label.create({
      data: {
        name,
        color,
      },
    });

    res.status(201).json({ message: "Label created", label });
  } catch (error) {
    console.error("Error creating label:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const labels = await prisma.label.findMany({
      orderBy: { name: "asc" },
    });

    res.status(200).json({ labels });
  } catch (error) {
    console.error("Error fetching labels:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  const labelId = req.params.id;

  try {
    const label = await prisma.label.findUnique({
      where: { id: labelId },
    });

    if (!label) {
      return res.status(404).json({ message: "Label not found" });
    }

    await prisma.label.delete({
      where: { id: labelId },
    });

    res.status(200).json({ message: "Label deleted successfully" });
  } catch (error) {
    console.error("Error deleting label:", error);
    res.status(500).json({ message: "Failed to delete label" });
  }
});

export default router;
