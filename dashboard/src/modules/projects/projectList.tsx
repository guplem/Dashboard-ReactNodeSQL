import { List, Datagrid, TextField, ChipField } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";

export const ProjectList = () => (
  <List>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <ChipField source="type" />
      <PercentageField source="conformityProgress" decimalPlaces={1} />
    </Datagrid>
  </List>
);
