import { Edit, SimpleForm, TextInput, required, DateTimeInput, NumberInput } from "react-admin";

export const EvaluationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <NumberInput source="projectId" validate={[required()]} />
      <NumberInput source="systemId" validate={[required()]} />
      <NumberInput source="datasetId" validate={[required()]} />
      <NumberInput source="score" validate={[required()]} />
      <NumberInput source="accuracy" />
      <NumberInput source="helpfulness" />
      <NumberInput source="relevancy" />
      <NumberInput source="toxicity" />
      <DateTimeInput source="date" validate={[required()]} />
    </SimpleForm>
  </Edit>
);
