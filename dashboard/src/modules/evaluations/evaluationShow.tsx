import React from "react";
import { Show, SimpleShowLayout, TextField, DateField, useShowController, Title } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const SimpleRadarChart = ({ data }: { data: { subject: string; value: number; fullMark: number }[] }) => {
  // Normalized data for radar chart
  const normalizedData = data.map((item) => {
    return {
      subject: item.subject,
      value: item.value,
      fullMark: item.fullMark,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={normalizedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Evaluation" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 auto", minWidth: "40%" }}>
        <Show style={{ minWidth: "100%" }}>
          <SimpleShowLayout>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "5px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", marginRight: "10px" }}>ID:</div>
                <TextField source="id" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", marginRight: "10px" }}>Date:</div>
                <DateField source="date" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "5px" }}>
              <div style={{ fontWeight: "normal", fontSize: "1em" }}>Project</div>
              <div style={{ fontWeight: "bold", fontSize: "2.0em" }}>{record?.project?.name}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", flex: 1 }}>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px", flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>System</div>
                <TextField source="system.name" />
              </div>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px", flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>Dataset</div>
                <TextField source="dataset.name" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px" }}>
                <div style={{ fontWeight: "bold" }}>Accuracy</div>
                <PercentageField source="accuracy" />
              </div>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px" }}>
                <div style={{ fontWeight: "bold" }}>Helpfulness</div>
                <PercentageField source="helpfulness" />
              </div>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px" }}>
                <div style={{ fontWeight: "bold" }}>Relevancy</div>
                <PercentageField source="relevancy" />
              </div>
              <div style={{ textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px" }}>
                <div style={{ fontWeight: "bold" }}>Toxicity</div>
                <PercentageField source="toxicity" />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "5px" }}>
              <div style={{ fontWeight: "bold", marginRight: "10px" }}>Score:</div>
              <PercentageField source="score" />
            </div>
          </SimpleShowLayout>
        </Show>
      </div>
      {radarData.length > 0 && (
        <div
          style={{
            flex: "0 1 600px",
            maxWidth: "600px",
            minWidth: "40%",
          }}
        >
          <SimpleRadarChart data={radarData} />
        </div>
      )}
    </div>
  );
};
