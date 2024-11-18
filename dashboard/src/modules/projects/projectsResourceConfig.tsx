import Icon from "@mui/icons-material/AutoAwesome";
import { ProjectList } from "./projectList";
import { ProjectCreate } from "./projectCreate";
import { ProjectEdit } from "./projectEdit";
import { ProjectShow } from "./projectShow";

export const ProjectsResourceConfig = {
  name: "projects",
  options: { label: "Projects" },
  recordRepresentation: (record: any) => ` - ${record.name}`,
  icon: Icon,
  list: ProjectList,
  create: ProjectCreate,
  edit: ProjectEdit,
  show: ProjectShow,
};
