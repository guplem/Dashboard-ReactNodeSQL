import express from "express";
import { PostService } from "../../../application/services/postService";

export const postRouter = (postService: PostService) => {
  const router = express.Router();

  /**
   * GET http://my.api.url/posts?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}
   */
  router.get("/", async (req, res) => {
    try {
      const sort = req.query.sort ? JSON.parse(req.query.sort as string) : [];
      const range = req.query.range ? JSON.parse(req.query.range as string) : [0, 24];
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const data = await postService.getList(sort, range, filter);
      res.set("Content-Range", `posts ${range[0]}-${range[1]}/${data.total}`);
      res.json(data.posts);
    } catch (error) {
      console.error("Error executing Post GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * GET http://my.api.url/posts/123
   */
  router.get("/:id", async (req, res) => {
    try {
      const post = await postService.getOne(req.params.id);
      res.json(post);
    } catch (error) {
      console.error(`Error executing GET /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on GET /${req.params.id}` });
      }
    }
  });

  /**
   * GET http://my.api.url/posts?filter={"ids":[123,456,789]}
   */
  router.get("/", async (req, res) => {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const posts = await postService.getMany(filter);
      res.json(posts);
    } catch (error) {
      console.error("Error executing Post GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * GET http://my.api.url/posts?filter={"author_id":345}
   */
  router.get("/", async (req, res) => {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const posts = await postService.getManyReference(filter);
      res.json(posts);
    } catch (error) {
      console.error("Error executing Post GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * POST http://my.api.url/posts
   */
  router.post("/", async (req, res) => {
    try {
      const post = await postService.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error executing Post POST /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `POST / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on POST /" });
      }
    }
  });

  /**
   * PUT http://my.api.url/posts/123
   */
  router.put("/:id", async (req, res) => {
    try {
      const post = await postService.update(req.params.id, req.body);
      res.json(post);
    } catch (error) {
      console.error(`Error executing PUT /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `PUT /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on PUT /${req.params.id}` });
      }
    }
  });

  /**
   * DELETE http://my.api.url/posts/123
   */
  router.delete("/:id", async (req, res) => {
    try {
      await postService.delete(req.params.id);
      res.status(204).end();
    } catch (error) {
      console.error(`Error executing DELETE /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `DELETE /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on DELETE /${req.params.id}` });
      }
    }
  });

  return router;
};
