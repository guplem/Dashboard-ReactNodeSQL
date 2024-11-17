import { Evaluation } from "../../domain/models/evaluation";
import { EvaluationRepository } from "../../domain/repositories/evaluationRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaEvaluationRepository implements EvaluationRepository {
  async getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ evaluations: Evaluation[]; total: number }> {
    const orderBy: { [key: string]: "asc" | "desc" }[] = [];
    for (let i = 0; i < sort.length; i += 2) {
      const field = sort[i];
      const direction = sort[i + 1]?.toLowerCase();
      if (field && (direction === "asc" || direction === "desc")) {
        orderBy.push({ [field]: direction });
      } else {
        throw new Error(`Invalid sort parameter: ${field} - ${direction}`);
      }
    }

    const evaluations = await prisma.evaluation.findMany({
      where: filter,
      orderBy: orderBy,
      skip: range[0],
      take: range[1] - range[0] + 1,
    });

    const total = await prisma.evaluation.count({ where: filter });
    return {
      evaluations: evaluations.map(
        (evaluation) =>
          new Evaluation(
            evaluation.id,
            evaluation.projectId,
            evaluation.systemId,
            evaluation.datasetId,
            Number(evaluation.score),
            Number(evaluation.accuracy),
            Number(evaluation.relevancy),
            Number(evaluation.helpfulness),
            Number(evaluation.toxicity),
            evaluation.date
          )
      ),
      total,
    };
  }

  async getOne(id: number): Promise<Evaluation> {
    const evaluation = await prisma.evaluation.findUnique({ where: { id } });
    if (!evaluation) throw new Error("Evaluation not found");
    return new Evaluation(
      evaluation.id,
      evaluation.projectId,
      evaluation.systemId,
      evaluation.datasetId,
      Number(evaluation.score),
      Number(evaluation.accuracy),
      Number(evaluation.relevancy),
      Number(evaluation.helpfulness),
      Number(evaluation.toxicity),
      evaluation.date
    );
  }

  async getMany(filter: { [key: string]: any }): Promise<Evaluation[]> {
    const evaluations = await prisma.evaluation.findMany({ where: filter });
    return evaluations.map(
      (evaluation) =>
        new Evaluation(
          evaluation.id,
          evaluation.projectId,
          evaluation.systemId,
          evaluation.datasetId,
          Number(evaluation.score),
          Number(evaluation.accuracy),
          Number(evaluation.relevancy),
          Number(evaluation.helpfulness),
          Number(evaluation.toxicity),
          evaluation.date
        )
    );
  }

  async getManyReference(filter: { [key: string]: any }): Promise<Evaluation[]> {
    const evaluations = await prisma.evaluation.findMany({ where: filter });
    return evaluations.map(
      (evaluation) =>
        new Evaluation(
          evaluation.id,
          evaluation.projectId,
          evaluation.systemId,
          evaluation.datasetId,
          Number(evaluation.score),
          Number(evaluation.accuracy),
          Number(evaluation.relevancy),
          Number(evaluation.helpfulness),
          Number(evaluation.toxicity),
          evaluation.date
        )
    );
  }

  async create(evaluation: Evaluation): Promise<Evaluation> {
    const createdEvaluation = await prisma.evaluation.create({
      data: {
        id: evaluation.id,
        projectId: evaluation.projectId,
        systemId: evaluation.systemId,
        datasetId: evaluation.datasetId,
        score: Number(evaluation.score),
        accuracy: evaluation.accuracy,
        relevancy: evaluation.relevancy,
        helpfulness: evaluation.helpfulness,
        toxicity: evaluation.toxicity,
        date: evaluation.date,
      },
    });
    return new Evaluation(
      createdEvaluation.id,
      createdEvaluation.projectId,
      createdEvaluation.systemId,
      createdEvaluation.datasetId,
      Number(evaluation.score),
      Number(evaluation.accuracy),
      Number(evaluation.relevancy),
      Number(evaluation.helpfulness),
      Number(evaluation.toxicity),
      createdEvaluation.date
    );
  }

  async update(id: number, evaluation: Evaluation): Promise<Evaluation> {
    const updatedEvaluation = await prisma.evaluation.update({
      where: { id },
      data: {
        projectId: evaluation.projectId,
        systemId: evaluation.systemId,
        datasetId: evaluation.datasetId,
        score: Number(evaluation.score),
        accuracy: evaluation.accuracy,
        relevancy: evaluation.relevancy,
        helpfulness: evaluation.helpfulness,
        toxicity: evaluation.toxicity,
        date: evaluation.date,
      },
    });
    return new Evaluation(
      updatedEvaluation.id,
      updatedEvaluation.projectId,
      updatedEvaluation.systemId,
      updatedEvaluation.datasetId,
      Number(evaluation.score),
      Number(evaluation.accuracy),
      Number(evaluation.relevancy),
      Number(evaluation.helpfulness),
      Number(evaluation.toxicity),
      updatedEvaluation.date
    );
  }

  async delete(id: number): Promise<void> {
    await prisma.evaluation.delete({ where: { id } });
  }
}
