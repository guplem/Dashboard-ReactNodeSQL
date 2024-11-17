import { Show, SimpleShowLayout, TextField, ChipField, NumberField } from "react-admin";

export const ProjectShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ChipField source="type" />
      <NumberField source="conformityProgress" />
    </SimpleShowLayout>
  </Show>
);
