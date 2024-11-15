import { Admin, Resource } from "react-admin";
import { Home } from "../home/home";
import { ApiTest } from "../apiTest/apiTest";
import { PostsPage } from "../posts/postsPage";
import simpleRestProvider from "ra-data-simple-rest";

// Encapsulates the full dashboard
export const Dashboard = () => {
  const dataProvider = simpleRestProvider(`${process.env.REACT_APP_API_URL}`);

  return (
    // Menu items are defined here
    <Admin dataProvider={dataProvider} dashboard={Home}>
      <Resource name="Api Test" list={ApiTest} />
      <Resource name="Posts" list={PostsPage} />
    </Admin>
  );
};
