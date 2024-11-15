import { Resource } from "react-admin";
import { PostList } from "./postList";
import { PostCreate } from "./postCreate";
import { PostEdit } from "./postEdit";
import { PostShow } from "./postShow";

export const PostPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
    </div>
  );
};
