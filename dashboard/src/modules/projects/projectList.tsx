import { List, Datagrid, TextField, DateField, RichTextField, NumberField, ChipField } from "react-admin";

export const ProjectList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ChipField source="type" />
      <NumberField source="conformityProgress" />
    </Datagrid>
  </List>
);
