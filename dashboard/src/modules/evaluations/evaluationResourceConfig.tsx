import Icon from "@mui/icons-material/AssignmentTurnedIn";

import { EvaluationList } from "./evaluationList";
import { EvaluationCreate } from "./evaluationCreate";
import { EvaluationEdit } from "./evaluationEdit";
import { EvaluationShow } from "./evaluationShow";

export const EvaluationsResourceConfig = {
  name: "evaluations",
  options: { label: "Evaluations" },
  recordRepresentation: (record: any) => ` of ${record.project.name}`,
  icon: Icon,
  list: EvaluationList,
  create: EvaluationCreate,
  edit: EvaluationEdit,
  show: EvaluationShow,
};
