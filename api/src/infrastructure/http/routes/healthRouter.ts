import express from "express";

export const HealthRouter = () => {
  const router = express.Router();

  // Simple health check to make sure the API is running
  router.get("/hello-world", async (req, res) => {
    try {
      res.json({ message: "Hello World!" });
    } catch (error) {
      console.error("Error in /hello-world", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  return router;
};
