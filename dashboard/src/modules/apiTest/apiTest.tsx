import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

// Enum for status
enum Status {
  Pending = "Pending",
  Ongoing = "Ongoing",
  Failed = "Failed",
  Success = "Success",
}

export const ApiTest = () => {
  const [message, setMessage] = useState(""); // State to hold the message
  const [status, setStatus] = useState<Status>(Status.Pending); // State to hold the status

  const fetchMessage = () => {
    const url: string = `${process.env.REACT_APP_API_URL}/health/hello-world`;
    setStatus(Status.Ongoing);
    // Fetching the message from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setStatus(Status.Success);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
        setStatus(Status.Failed);
      });
  };

  useEffect(() => {
    // Disabled so it must be clicked to perform the test
    // fetchMessage();
  }, []); // Empty dependency array means this only runs once after the first render

  const getStatusEmoji = (status: Status) => {
    switch (status) {
      case Status.Pending:
        return "";
      case Status.Ongoing:
        return "⏳";
      case Status.Failed:
        return "❌";
      case Status.Success:
        return "✅";
      default:
        return "";
    }
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            API Health Check
          </Typography>
        </CardContent>
      </Card>
      <p>API says: {message}</p>
      <p>
        Status: {status} {getStatusEmoji(status)}
      </p>
      <Button variant="contained" color="primary" onClick={fetchMessage} disabled={status === Status.Ongoing}>
        {status === Status.Pending ? "Start 🚀" : "Retry"}
      </Button>
    </div>
  );
};
