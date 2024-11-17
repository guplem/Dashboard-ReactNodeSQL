import { Show, SimpleShowLayout, TextField, DateField, RichTextField, ChipField, NumberField } from "react-admin";

export const EvaluationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ChipField source="type" />
      <NumberField source="conformityProgress" />
    </SimpleShowLayout>
  </Show>
);
