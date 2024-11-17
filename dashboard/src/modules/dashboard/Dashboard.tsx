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
      <Resource {...PostsResourceConfig} />
      <Resource {...ProjectsResourceConfig} />
      <Resource {...EvaluationsResourceConfig} />
      <CustomRoutes>
        <Route path="/api-test" element={<ApiTest />} />
      </CustomRoutes>
    </Admin>
  );
};
