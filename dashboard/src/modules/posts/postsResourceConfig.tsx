import PostIcon from "@mui/icons-material/Book";

import { PostList } from "./postList";
import { PostCreate } from "./postCreate";
import { PostEdit } from "./postEdit";
import { PostShow } from "./postShow";

export const PostsResourceConfig = {
  name: "Posts",
  options: { label: "Posts Demo" },
  recordRepresentation: (record: any) => ` - ${record.title}`,
  icon: PostIcon,
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostShow,
};
