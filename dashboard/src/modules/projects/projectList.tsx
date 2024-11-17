import { List, Datagrid, TextField, NumberField, ChipField, Link, useRecordContext } from "react-admin";

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
