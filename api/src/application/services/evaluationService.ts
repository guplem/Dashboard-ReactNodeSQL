import { Evaluation } from "../../domain/models/evaluation";
import { EvaluationRepository } from "../../domain/repositories/evaluationRepository";



export class EvaluationService {
  constructor(private readonly EvaluationRepository: EvaluationRepository) {}

  create(EvaluationData: { [key: string]: any }): Promise<Evaluation> {
    return this.EvaluationRepository.create(EvaluationData as Evaluation);
  }

  getList(sort: string[], range: number[], filter: { [key: string]: any }): Promise<{ evaluations: Evaluation[]; total: number }> {
    return this.EvaluationRepository.getList(sort, range, filter);
  }

  getOne(id: number | string): Promise<Evaluation> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.EvaluationRepository.getOne(idNumber);
  }

  getMany(filter: { [key: string]: any }): Promise<Evaluation[]> {
    return this.EvaluationRepository.getMany(filter);
  }

  getManyReference(filter: { [key: string]: any }): Promise<Evaluation[]> {
    return this.EvaluationRepository.getManyReference(filter);
  }

  update(id: number | string, Evaluation: Evaluation): Promise<Evaluation> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.EvaluationRepository.update(idNumber, Evaluation);
  }

  delete(id: number | string): Promise<void> {
    const idNumber = typeof id === "string" ? parseInt(id, 10) : id;
    return this.EvaluationRepository.delete(idNumber);
  }
}
