import Icon from "@mui/icons-material/Book";

import { PostList } from "./postList";
import { PostCreate } from "./postCreate";
import { PostEdit } from "./postEdit";
import { PostShow } from "./postShow";

export const PostsResourceConfig = {
  name: "posts",
  options: { label: "Posts Demo" },
  recordRepresentation: (record: any) => ` - ${record.title}`,
  icon: Icon,
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostShow,
};
