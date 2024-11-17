import Icon from "@mui/icons-material/AssignmentTurnedIn";

import { EvaluationList } from "./evaluationList";
import { EvaluationCreate } from "./evaluationCreate";
import { EvaluationEdit } from "./evaluationEdit";
import { EvaluationShow } from "./evaluationShow";

export const EvaluationsResourceConfig = {
  name: "Evaluations",
  options: { label: "Evaluations" },
  recordRepresentation: (record: any) => ` - ${record.title}`,
  icon: Icon,
  list: EvaluationList,
  create: EvaluationCreate,
  edit: EvaluationEdit,
  show: EvaluationShow,
};
