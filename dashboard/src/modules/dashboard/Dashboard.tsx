import { Admin, CustomRoutes, Resource } from "react-admin";
import { Home } from "../home/home";
import { ApiTest } from "../apiTest/apiTest";
import simpleRestProvider from "ra-data-simple-rest";
import { Route } from "react-router-dom";
import PostIcon from "@mui/icons-material/Book";

import { PostList } from "../posts/postList";
import { PostCreate } from "../posts/postCreate";
import { PostEdit } from "../posts/postEdit";
import { PostShow } from "../posts/postShow";

// Encapsulates the full dashboard
export const Dashboard = () => {
  const dataProvider = simpleRestProvider(`${process.env.REACT_APP_API_URL}`);

  return (
    // Menu items are defined here
    <Admin dataProvider={dataProvider} dashboard={Home}>
      <Resource
        name="Posts"
        options={{ label: "Posts Demo" }}
        recordRepresentation={(record) => ` - ${record.title}`}
        icon={PostIcon}
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        show={PostShow}
      />
      <CustomRoutes>
        <Route path="/api-test" element={<ApiTest />} />
      </CustomRoutes>
    </Admin>
  );
};
