import React, { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { PostList } from "./postsList";

export const Page2 = () => {
  const dataProvider = simpleRestProvider("http://localhost:3001/api");

  return (
    <div>
      <h1>Posts</h1>
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
      </Admin>
    </div>
  );
};
