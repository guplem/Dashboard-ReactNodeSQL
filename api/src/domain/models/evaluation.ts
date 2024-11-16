export class Evaluation {
  constructor(
    public id: number,
    public projectId: number,
    public systemId: number,
    public datasetId: number,
    public score: number,
    public accuracy?: number | null,
    public relevancy?: number | null,
    public helpfulness?: number | null,
    public toxicity?: number | null,
    public date: Date = new Date()
  ) {}
}
