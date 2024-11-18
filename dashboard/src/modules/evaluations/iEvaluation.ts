export interface Evaluation {
  id: number;
  score: number;
  project: { id: number; name: string };
  system: { id: number; name: string };
  dataset: { id: number; name: string };
  date: Date;
  accuracy: number;
  helpfulness: number;
  relevancy: number;
  toxicity: number;
}
