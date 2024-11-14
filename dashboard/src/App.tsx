import React, { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { PostList } from "./posts";

const App = () => {
  const [message, setMessage] = useState(""); // State to hold the message

  // const dataProvider = simpleRestProvider("http://localhost:3001/api");

  useEffect(() => {
    const url: string = `${process.env.REACT_APP_API_URL}/health/hello-world`;
    // Fetching the message from the API on component mount
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []); // Empty dependency array means this runs once after the first render

  return (
    <div>
      <h1>Dashboard App</h1>
      <p>API health check: {message}</p>
      {/* <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
      </Admin> */}
    </div>
  );
};

export default App;
