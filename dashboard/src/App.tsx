import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { PostList } from "./posts";

const App = () => {
  const dataProvider = simpleRestProvider("http://api:3001/api");

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
    </Admin>
  );
};

export default App;
