import express from "express";
import cors from "cors";
import { PrismaPostRepository } from "../repositories/prismaPostRepository";
import { PostService } from "../../application/services/postService";
import { postRouter } from "./routes/postRouter";
import { healthRouter } from "./routes/healthRouter";

// Dependency Injection
const postRepository = new PrismaPostRepository();
const postService = new PostService(postRepository);

// Enable CORS for the frontend with necessary headers exposed
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow requests from the frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow all necessary methods
  exposedHeaders: ["Content-Range"], // Expose 'Content-Range' to the frontend
  // credentials: true, // Uncomment if cookies or authentication tokens need to be sent
};

const app = express();
app.use(cors(corsOptions)); // Apply CORS with the configured options to all routes
app.use(express.json());
app.use("/health", healthRouter());
app.use("/posts", postRouter(postService));

app.listen(3001, () => {
  console.log("\nAPI is running! 🚀");
});
