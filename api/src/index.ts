import express from "express";
import cors from 'cors';
import postsRouter from "./routes/posts";
import healthRouter from "./routes/health";

const app = express();

// Enable CORS for the frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all necessary methods
  // credentials: true, // If needed to send cookies, include this
};

app.use(cors(corsOptions)); // Apply CORS to all routes

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api", postsRouter);

app.listen(3001, () => {
  console.log("API is running! 🚀");
});
