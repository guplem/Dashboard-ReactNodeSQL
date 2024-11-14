import { Admin, Resource } from "react-admin";
import { Home } from "../home/home";
import { ApiTest } from "../apiTest/apiTest";
import { PostsPage } from "../posts/postsPage";

// Encapsulates the full dashboard
export const Dashboard = () => {
  return (
    // Menu items are defined here
    <Admin dashboard={Home}>
      <Resource name="Api Test" list={ApiTest} />
      <Resource name="Posts" list={PostsPage} />
    </Admin>
  );
};
