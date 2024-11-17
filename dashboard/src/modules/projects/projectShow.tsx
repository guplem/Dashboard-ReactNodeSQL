import { Show, SimpleShowLayout, TextField, ChipField, useInfiniteGetList } from "react-admin";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { PercentageField } from "../../utils/components/percentageField";

interface Evaluation {
  id: number;
  score: number;
  system: { name: string };
  dataset: { name: string };
}

export const ProjectShow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteGetList<Evaluation>("evaluations", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "score", order: "DESC" },
    filter: { projectId: Number(id) },
  });

  return (
    <>
      <Show>
        <SimpleShowLayout>
          <TextField source="name" />
          <ChipField source="type" />
          <PercentageField source="conformityProgress" />
        </SimpleShowLayout>
      </Show>

      <Typography variant="h6" sx={{ margin: 2 }}>
        Evaluations of the project
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {data?.pages.map((page) =>
          page.data.map((evaluation) => (
            <Card
              key={evaluation.id}
              sx={{
                minWidth: 150,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
              onClick={() => navigate(`/Evaluations/${evaluation.id}/show`)}
            >
              <CardContent>
                <Typography variant="h6">{evaluation.score}%</Typography>
                <Typography variant="body2" color="textSecondary">
                  System: {evaluation.system.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Dataset: {evaluation.dataset.name}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      {hasNextPage && (
        <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
          <Button variant="text" color="primary" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            See More
          </Button>
        </Box>
      )}

      <br />
    </>
  );
};
