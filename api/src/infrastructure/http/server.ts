import express from "express";
import cors from "cors";

import { healthRouter } from "./routes/healthRouter";

import { PrismaPostRepository } from "../repositories/prismaPostRepository";
import { PostService } from "../../application/services/postService";
import { postRouter } from "./routes/postRouter";

import { PrismaProjectRepository } from "../repositories/prismaProjectRepository";
import { ProjectService } from "../../application/services/projectService";
import { projectRouter } from "./routes/projectRouter";

// import { PrismaEvaluationRepository } from "../repositories/prismaEvaluationRepository";
// import { EvaluationService } from "../../application/services/evaluationService";
// import { EvaluationRouter } from "./routes/evaluationRouter";

// Dependency Injection
const postRepository = new PrismaPostRepository();
const postService = new PostService(postRepository);
const projectRepository = new PrismaProjectRepository();
const projectService = new ProjectService(projectRepository);
// const evaluationRepository = new PrismaEvaluationRepository();
// const evaluationService = new EvaluationService(projectRepository);

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
app.use("/projects", projectRouter(projectService));
// app.use("/evaluations", evaluationRouter(evaluationService));
// app.use("/projects/:id/evaluations", projetEvaluationRouter(evaluationService));

app.listen(3001, () => {
  console.log("\nAPI is running! 🚀");
});
