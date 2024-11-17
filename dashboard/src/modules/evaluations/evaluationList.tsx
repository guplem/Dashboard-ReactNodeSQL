import { List, Datagrid, TextField, DateField, NumberField, ChipField } from "react-admin";

export const EvaluationList = () => (
  <List>
    <Datagrid>
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
    </Datagrid>
  </List>
);
