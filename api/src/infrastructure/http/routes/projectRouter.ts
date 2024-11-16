import express from "express";
import { ProjectService } from "../../../application/services/projectService";

export const projectRouter = (projectService: ProjectService) => {
  const router = express.Router();

  /**
   * GET http://my.api.url/projects?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}
   */
  router.get("/", async (req, res) => {
    try {
      const sort = req.query.sort ? JSON.parse(req.query.sort as string) : [];
      const range = req.query.range ? JSON.parse(req.query.range as string) : [0, 24];
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const data = await projectService.getList(sort, range, filter);
      res.set("Content-Range", `projects ${range[0]}-${range[1]}/${data.total}`);
      res.json(data.projects);
    } catch (error) {
      console.error("Error executing Project GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * GET http://my.api.url/projects/123
   */
  router.get("/:id", async (req, res) => {
    try {
      const project = await projectService.getOne(req.params.id);
      res.json(project);
    } catch (error) {
      console.error(`Error executing Project GET /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on GET /${req.params.id}` });
      }
    }
  });

  /**
   * GET http://my.api.url/projects?filter={"ids":[123,456,789]}
   */
  router.get("/", async (req, res) => {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const projects = await projectService.getMany(filter);
      res.json(projects);
    } catch (error) {
      console.error("Error executing Project GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * GET http://my.api.url/projects?filter={"author_id":345}
   */
  router.get("/", async (req, res) => {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
      const projects = await projectService.getManyReference(filter);
      res.json(projects);
    } catch (error) {
      console.error("Error executing Project GET /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `GET / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on GET /" });
      }
    }
  });

  /**
   * PROJECT http://my.api.url/projects
   */
  router.post("/", async (req, res) => {
    try {
      const project = await projectService.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      console.error("Error executing Project PROJECT /", error);
      if (error instanceof Error) {
        res.status(500).json({ error: `PROJECT / - ${error.message}` });
      } else {
        res.status(500).json({ error: "Unknown error on PROJECT /" });
      }
    }
  });

  /**
   * PUT http://my.api.url/projects/123
   */
  router.put("/:id", async (req, res) => {
    try {
      const project = await projectService.update(req.params.id, req.body);
      res.json(project);
    } catch (error) {
      console.error(`Error executing Project PUT /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `PUT /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on PUT /${req.params.id}` });
      }
    }
  });

  /**
   * DELETE http://my.api.url/projects/123
   */
  router.delete("/:id", async (req, res) => {
    try {
      await projectService.delete(req.params.id);
      res.status(204).end();
    } catch (error) {
      console.error(`Error executing Project DELETE /${req.params.id}`, error);
      if (error instanceof Error) {
        res.status(500).json({ error: `DELETE /${req.params.id} - ${error.message}` });
      } else {
        res.status(500).json({ error: `Unknown error on DELETE /${req.params.id}` });
      }
    }
  });

  return router;
};
