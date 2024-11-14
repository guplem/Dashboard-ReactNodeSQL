import { Admin, Resource } from "react-admin";
import { Home } from "../home/home";
import { Page1 as ApiTest } from "../apiTest/apiTest";
import { Page2 as PostsPage } from "../posts/postsPage";

export const Dashboard = () => {
  return (
    // Menu items are defined here
    <Admin dashboard={Home}>
      <Resource name="Api Test" list={ApiTest} />
      <Resource name="Posts" list={PostsPage} />
    </Admin>
  );
};
