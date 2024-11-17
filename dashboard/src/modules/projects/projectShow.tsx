import { Show, SimpleShowLayout, TextField, ChipField, NumberField, useGetList } from "react-admin";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";

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
        systemName: evaluation.system.name,
        datasetName: evaluation.dataset.name,
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {evaluations.map((evaluation) => (
          <Card
            key={evaluation.id}
            sx={{ minWidth: 150, cursor: 'pointer' }}
            onClick={() => navigate(`/Evaluations/${evaluation.id}/show`)}
          >
            <CardContent>
              <Typography variant="h6">{evaluation.score}%</Typography>
              <Typography variant="body2" color="textSecondary">
                System: {evaluation.systemName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Dataset: {evaluation.datasetName}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <RefreshButton refetch={refetch} navigate={navigate} />
    </>
  );
};
