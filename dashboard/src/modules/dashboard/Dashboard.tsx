import { Admin, CustomRoutes, Resource } from "react-admin";
import { DashboardPage } from "./dashboardPage";
import { ApiTest } from "../apiTest/apiTest";
import simpleRestProvider from "ra-data-simple-rest";
import { Route } from "react-router-dom";
import { PostsResourceConfig } from "../posts/postsResourceConfig";
import { ProjectsResourceConfig } from "../projects/projectsResourceConfig";
import { EvaluationsResourceConfig } from "../evaluations/evaluationResourceConfig";

// Encapsulates the full dashboard
export const Dashboard = () => {
  const dataProvider = simpleRestProvider(`${process.env.REACT_APP_API_URL}`);

  return (
    // Menu items are defined here
    <Admin dataProvider={dataProvider} dashboard={DashboardPage}>
      <Resource {...ProjectsResourceConfig} />
      <Resource {...EvaluationsResourceConfig} />
      <CustomRoutes>
        <Route path="/api-test" element={<ApiTest />} />
      </CustomRoutes>

      {/* This is the first paart I did develop, jsut to test that the API, front and database were up and running with very simple models and calls */}
      {/* Has been disabled to avoid confusion, but uncomenting this line will provide easy access to a simple "posts management system" */}
      {/* <Resource {...PostsResourceConfig} /> */}
    </Admin>
  );
};
