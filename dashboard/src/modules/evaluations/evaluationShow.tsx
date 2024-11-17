import { Show, SimpleShowLayout, TextField, DateField, NumberField } from "react-admin";

export const EvaluationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="project.name" />
      <TextField source="system.name" />
      <TextField source="dataset.name" />
      <NumberField source="score" />
      <NumberField source="accuracy" />
      <NumberField source="helpfulness" />
      <NumberField source="relevancy" />
      <NumberField source="toxicity" />
      <DateField source="date" />
    </SimpleShowLayout>
  </Show>
);
