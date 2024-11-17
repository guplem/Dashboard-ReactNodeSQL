import { Title, useGetList } from "react-admin";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDataProvider } from "react-admin";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { useTheme } from "@mui/material/styles";

interface Project {
  id: number;
  name: string;
  conformityProgress: number;
}

const RefreshButton = ({ refetch, navigate }: { refetch: () => void; navigate: NavigateFunction }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    {/* This makes the button only take as much space as needed */}
    <Button variant="contained" color="primary" onClick={refetch}>
      Refresh
    </Button>
    <Button variant="text" color="primary" onClick={() => navigate("/api-test")}>
      Go to API Test
    </Button>
  </div>
);

export const DashboardPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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

  // Prepare data for the BarChart
  const chartData = data.map((project) => ({
    Name: project.name,
    Progress: project.conformityProgress * 100, // Convert to percentage
  }));

  return (
    <>
      <Title title="Top Projects" />

      <Typography variant="h6" sx={{ margin: 2 }}>
        Project Conformity Progress
      </Typography>
      <ResponsiveContainer width="100%" height="65%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip
            cursor={false}
            labelFormatter={(value) => `Project: ${value}`}
            labelStyle={{ color: theme.palette.text.primary }}
            formatter={(value) => [`${value}%`, "Progress"]}
            contentStyle={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider }}
          />
          <Bar dataKey="Progress" fill={theme.palette.primary.main} onClick={() => navigate("/api-test")} />
        </BarChart>
      </ResponsiveContainer>

      <RefreshButton refetch={refetch} navigate={navigate} />
    </>
  );
};
