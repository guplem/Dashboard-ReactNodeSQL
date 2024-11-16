import { Evaluation } from "./evaluation";

export class Project {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public conformityProgress: number,
    public evaluations?: Evaluation[] | null
  ) {}
}
