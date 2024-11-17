import { Show, SimpleShowLayout, TextField, ChipField, useInfiniteGetList } from "react-admin";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { PercentageField } from "../../utils/components/percentageField";
import { PieChart, Pie, Cell } from "recharts";
import { useTheme } from "@mui/material/styles";

interface Evaluation {
  id: number;
  score: number;
  system: { name: string };
  dataset: { name: string };
}

const RADIAN = Math.PI / 180;

const needle = (value: number, data: any[], cx: number, cy: number, iR: number, oR: number, color: string | undefined) => {
  let total = 0;
  data.forEach((v: { value: number }) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [<circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />, <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />];
};

const PieChartWithNeedle = ({ score }: { score: number }) => {
  const theme = useTheme();
  const data = [
    { name: "0-25%", value: 25 },
    { name: "25-50%", value: 25 },
    { name: "50-75%", value: 25 },
    { name: "75-100%", value: 25 },
  ];
  const cx = 75;
  const cy = 75;
  const iR = 30;
  const oR = 60;
  const value = score;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PieChart width={150} height={95}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={cx} cy={cy} innerRadius={iR} outerRadius={oR} fill="#8884d8" stroke="none">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? theme.palette.error.main : index === 1 ? theme.palette.warning.main : index === 2 ? "#FFFF00" : "#00C49F"} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#a0a000")}
      </PieChart>
      <Typography variant="h6">{score}%</Typography>
    </Box>
  );
};

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
                <PieChartWithNeedle score={evaluation.score * 100} />
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
