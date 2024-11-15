import express from "express";
import prisma from "../prismaClient";

export const router = express.Router();

// Middleware to set CORS headers
router.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Range");
  next();
});

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    const totalPosts = await prisma.post.count();
    res.set("Content-Range", `posts 0-${posts.length - 1}/${totalPosts}`);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
