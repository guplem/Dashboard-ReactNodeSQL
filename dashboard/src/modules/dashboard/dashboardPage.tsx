import { Title, useGetList } from "react-admin";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDataProvider } from "react-admin";
import { Key } from "react";

interface Project {
  id: number;
  name: string;
}

const RefreshButton = ({ refetch, navigate }: { refetch: () => void; navigate: NavigateFunction }) => (
  <>
    <Button variant="contained" color="primary" onClick={refetch}>
      Refresh
    </Button>
    <br />
    <br />
    <Button variant="text" color="primary" onClick={() => navigate("/api-test")}>
      Go to API Test
    </Button>
  </>
);

export const DashboardPage = () => {
  const navigate = useNavigate();

  const dataProvider = useDataProvider();

  const { data, error, isPending, refetch } = useGetList<Project>("projects", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "conformityProgress", order: "DESC" },
  });

  if (isPending)
    return (
      <div>
        <h1>Loading...</h1>
        <RefreshButton refetch={refetch} navigate={navigate} />
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <RefreshButton refetch={refetch} navigate={navigate} />
      </div>
    );

  if (!data)
    return (
      <div>
        <h1>No data</h1>
        <RefreshButton refetch={refetch} navigate={navigate} />
      </div>
    );

  return (
    <>
      <Card sx={{ mt: 2, width: 400 }}>
        <Title title="TITLE IS THIS?" />
        <CardContent>
          <Typography variant="h6">Top Projects</Typography>
          <List dense>
            {data.map((project: Project) => (
              <ListItem key={project.id} disableGutters>
                <ListItemText primary={`Name: ${project.name}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <RefreshButton refetch={refetch} navigate={navigate} />
    </>
  );
};
