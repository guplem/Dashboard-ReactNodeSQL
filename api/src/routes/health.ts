import express from "express";

const router = express.Router();

// Simple health check to make sure the API is running
router.get("/hello-world", async (req, res) => {
  try {
    res.json({ message: "Hello World!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
