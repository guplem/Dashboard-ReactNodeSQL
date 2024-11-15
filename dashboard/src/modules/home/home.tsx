import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <Button variant="contained" color="primary" onClick={() => navigate("/api-test")}>
        Go to API Test
      </Button>
    </div>
  );
};
