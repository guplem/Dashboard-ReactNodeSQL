import express from "express";
import prisma from "../prismaClient";

const router = express.Router();

// GET all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

export default router;
