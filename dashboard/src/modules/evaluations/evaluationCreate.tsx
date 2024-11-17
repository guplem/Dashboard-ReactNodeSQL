import { Create, SimpleForm, TextInput, required, DateTimeInput, NumberInput } from "react-admin";

export const EvaluationCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="projectId" validate={[required()]} />
      <NumberInput source="systemId" validate={[required()]} />
      <NumberInput source="datasetId" validate={[required()]} />
      <TextInput source="name" validate={[required()]} />
      <NumberInput source="conformityProgress" validate={[required()]} />
      <NumberInput source="score" validate={[required()]} />
      <NumberInput source="accuracy" />
      <NumberInput source="helpfulness" />
      <NumberInput source="relevancy" />
      <NumberInput source="toxicity" />
      <DateTimeInput source="date" validate={[required()]} />
    </SimpleForm>
  </Create>
);
