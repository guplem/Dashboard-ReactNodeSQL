import { List, Datagrid, TextField, DateField } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";

export const EvaluationList = () => (
  <List>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="project.name" />
      <TextField source="system.name" />
      <TextField source="dataset.name" />
      <PercentageField source="score" decimalPlaces={1} />
      <PercentageField source="accuracy" decimalPlaces={0} />
      <PercentageField source="helpfulness" decimalPlaces={0} />
      <PercentageField source="relevancy" decimalPlaces={0} />
      <PercentageField source="toxicity" decimalPlaces={0} />
      <DateField source="date" />
    </Datagrid>
  </List>
);
