import { Show, SimpleShowLayout, TextField, ChipField, NumberField, useGetList } from "react-admin";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

interface Evaluation {
  id: number;
  score: number;
  system: { name: string };
  dataset: { name: string };
}

const RefreshButton = ({ refetch, navigate }: { refetch: () => void; navigate: NavigateFunction }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    {/* This makes the button only take as much space as needed */}
    <Button variant="contained" color="primary" onClick={refetch}>
      Refresh
    </Button>
  </div>
);

export const ProjectShow = () => {
  const navigate = useNavigate();

  const { projectId } = useParams();

  const { data, error, isPending, refetch } = useGetList<Evaluation>("evaluations", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "score", order: "DESC" },
    filter: { projectId: projectId },
  });

  // Prepare evaluations' data
  const evaluations = !data
    ? []
    : data.map((evaluation) => ({
        id: evaluation.id,
        score: evaluation.score * 100, // Convert to percentage
      }));

  return (
    <>
      <Show>
        <SimpleShowLayout>
          <TextField source="name" />
          <ChipField source="type" />
          <NumberField source="conformityProgress" />
        </SimpleShowLayout>
      </Show>

      <Typography variant="h6" sx={{ margin: 2 }}>
        Evaluations of the project
      </Typography>
      <ul>
        {evaluations.map((tag) => (
          <li key={tag.id}>{tag.score}%</li>
        ))}
      </ul>

      <RefreshButton refetch={refetch} navigate={navigate} />
    </>
  );
};
