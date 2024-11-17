import React from "react";
import { Show, SimpleShowLayout, TextField, DateField, useShowController } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const SimpleRadarChart = ({ data }: { data: { subject: string; value: number; fullMark: number }[] }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Evaluation" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export const EvaluationShow = () => {
  const { record } = useShowController();

  const radarData = record
    ? [
        { subject: "Accuracy", value: record.accuracy, fullMark: 1 },
        { subject: "Helpfulness", value: record.helpfulness, fullMark: 1 },
        { subject: "Relevancy", value: record.relevancy, fullMark: 1 },
        { subject: "Non-Toxicity", value: 1 - record.toxicity, fullMark: 1 },
      ]
    : [];

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: "1 1 auto" }}>
        <Show>
          <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="project.name" />
            <TextField source="system.name" />
            <TextField source="dataset.name" />
            <PercentageField source="score" />
            <PercentageField source="accuracy" />
            <PercentageField source="helpfulness" />
            <PercentageField source="relevancy" />
            <PercentageField source="toxicity" />
            <DateField source="date" />
          </SimpleShowLayout>
        </Show>
      </div>
      {radarData.length > 0 && (
        <div style={{ flex: "0 1 600px", maxWidth: "600px", marginLeft: "20px" }}>
          <SimpleRadarChart key={JSON.stringify(radarData)} data={radarData} />
        </div>
      )}
    </div>
  );
};
