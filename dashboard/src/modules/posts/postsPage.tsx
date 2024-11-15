import { Admin, Layout, Resource } from "react-admin";
import { PostList } from "./postsList";
// import { ReactQueryDevtools } from "react-query/devtools";

export const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Resource name="posts" list={PostList} />
    </div>
  );
};
