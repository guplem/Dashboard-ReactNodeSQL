import express from "express";
import postsRouter from "./routes/posts";

const app = express();

app.use(express.json());
app.use("/api", postsRouter);

app.listen(3001, () => {
  console.log("API is running on http://localhost:3001");
});
