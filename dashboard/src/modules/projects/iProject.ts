import { ProjectType } from "./projectTypes";

export interface Project {
  id: number;
  name: string;
  type: ProjectType;
  conformityProgress: number;
}
