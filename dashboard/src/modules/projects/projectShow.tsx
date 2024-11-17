import { Show, SimpleShowLayout, TextField, ChipField, NumberField, useGetList } from "react-admin";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

interface Evaluation {
  id: number;
  score: number;
  system: { name: string };
  dataset: { name: string };
}

export const ProjectShow = () => {
  const navigate = useNavigate();

  const { projectId } = useParams();
  const [page, setPage] = useState(1);
  const [evaluationsMap, setEvaluationsMap] = useState<Map<number, Evaluation>>(new Map());

  const { data, error, isPending, refetch } = useGetList<Evaluation>("evaluations", {
    pagination: { page: page, perPage: 2 },
    sort: { field: "score", order: "DESC" },
    filter: { projectId: projectId },
  });

  useEffect(() => {
    if (data) {
      setEvaluationsMap((prevMap) => {
        const newMap = new Map(prevMap);
        data.forEach((evaluation) => {
          newMap.set(evaluation.id, {
            id: evaluation.id,
            score: evaluation.score,
            system: evaluation.system,
            dataset: evaluation.dataset,
          });
        });
        return newMap;
      });
    }
  }, [data]);

  const handleSeeMore = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      refetch();
      return newPage;
    });
  };

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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {Array.from(evaluationsMap.values())
          .sort((a, b) => b.score - a.score)
          .map((evaluation) => (
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
          ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
        <Button variant="text" color="primary" onClick={handleSeeMore}>
          See More ({evaluationsMap.size}/{!data ? -1 : "totalNumberElements"})
        </Button>
      </Box>
    </>
  );
};
