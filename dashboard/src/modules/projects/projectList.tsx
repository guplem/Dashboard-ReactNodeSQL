import { List, Datagrid, TextField, NumberField, ChipField, Link, useRecordContext } from "react-admin";
import Icon from "@mui/icons-material/AssignmentTurnedIn";
import { Button } from "@mui/material";

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
