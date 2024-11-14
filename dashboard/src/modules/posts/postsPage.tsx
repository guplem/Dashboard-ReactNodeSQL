import React, { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { PostList } from "./postsList";

export const PostsPage = () => {
  const dataProvider = simpleRestProvider(`${process.env.REACT_APP_API_URL}/posts`);

  return (
    <div>
      <h1>Posts</h1>
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
      </Admin>
    </div>
  );
};
