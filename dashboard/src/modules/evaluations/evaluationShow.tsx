import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";

export const EvaluationShow = () => (
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
);
