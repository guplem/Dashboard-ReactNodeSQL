// import express from "express";
// import { EvaluationService } from "../../../application/services/evaluationService";

// export const evaluationRouter = (evaluationService: EvaluationService) => {
//   const router = express.Router();

//   /**
//    * GET http://my.api.url/evaluations?sort=["title","ASC"]&range=[0, 24]&filter={"title":"bar"}
//    */
//   router.get("/", async (req, res) => {
//     try {
//       const sort = req.query.sort ? JSON.parse(req.query.sort as string) : [];
//       const range = req.query.range ? JSON.parse(req.query.range as string) : [0, 24];
//       const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
//       const data = await evaluationService.getList(sort, range, filter);
//       res.set("Content-Range", `evaluations ${range[0]}-${range[1]}/${data.total}`);
//       res.json(data.evaluations);
//     } catch (error) {
//       console.error("Error executing Evaluation GET /", error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `GET / - ${error.message}` });
//       } else {
//         res.status(500).json({ error: "Unknown error on GET /" });
//       }
//     }
//   });

//   /**
//    * GET http://my.api.url/evaluations/123
//    */
//   router.get("/:id", async (req, res) => {
//     try {
//       const evaluation = await evaluationService.getOne(req.params.id);
//       res.json(evaluation);
//     } catch (error) {
//       console.error(`Error executing Evaluation GET /${req.params.id}`, error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `GET /${req.params.id} - ${error.message}` });
//       } else {
//         res.status(500).json({ error: `Unknown error on GET /${req.params.id}` });
//       }
//     }
//   });

//   /**
//    * GET http://my.api.url/evaluations?filter={"ids":[123,456,789]}
//    */
//   router.get("/", async (req, res) => {
//     try {
//       const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
//       const evaluations = await evaluationService.getMany(filter);
//       res.json(evaluations);
//     } catch (error) {
//       console.error("Error executing Evaluation GET /", error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `GET / - ${error.message}` });
//       } else {
//         res.status(500).json({ error: "Unknown error on GET /" });
//       }
//     }
//   });

//   /**
//    * GET http://my.api.url/evaluations?filter={"author_id":345}
//    */
//   router.get("/", async (req, res) => {
//     try {
//       const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
//       const evaluations = await evaluationService.getManyReference(filter);
//       res.json(evaluations);
//     } catch (error) {
//       console.error("Error executing Evaluation GET /", error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `GET / - ${error.message}` });
//       } else {
//         res.status(500).json({ error: "Unknown error on GET /" });
//       }
//     }
//   });

//   /**
//    * EVALUATION http://my.api.url/evaluations
//    */
//   router.post("/", async (req, res) => {
//     try {
//       const evaluation = await evaluationService.create(req.body);
//       res.status(201).json(evaluation);
//     } catch (error) {
//       console.error("Error executing Evaluation EVALUATION /", error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `EVALUATION / - ${error.message}` });
//       } else {
//         res.status(500).json({ error: "Unknown error on EVALUATION /" });
//       }
//     }
//   });

//   /**
//    * PUT http://my.api.url/evaluations/123
//    */
//   router.put("/:id", async (req, res) => {
//     try {
//       const evaluation = await evaluationService.update(req.params.id, req.body);
//       res.json(evaluation);
//     } catch (error) {
//       console.error(`Error executing Evaluation PUT /${req.params.id}`, error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `PUT /${req.params.id} - ${error.message}` });
//       } else {
//         res.status(500).json({ error: `Unknown error on PUT /${req.params.id}` });
//       }
//     }
//   });

//   /**
//    * DELETE http://my.api.url/evaluations/123
//    */
//   router.delete("/:id", async (req, res) => {
//     try {
//       await evaluationService.delete(req.params.id);
//       res.status(204).end();
//     } catch (error) {
//       console.error(`Error executing Evaluation DELETE /${req.params.id}`, error);
//       if (error instanceof Error) {
//         res.status(500).json({ error: `DELETE /${req.params.id} - ${error.message}` });
//       } else {
//         res.status(500).json({ error: `Unknown error on DELETE /${req.params.id}` });
//       }
//     }
//   });

//   return router;
// };
