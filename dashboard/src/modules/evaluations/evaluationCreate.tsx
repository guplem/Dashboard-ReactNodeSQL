import { Create, SimpleForm, TextInput, required, DateTimeInput, SelectInput, NumberInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { evaluationTypesSelector } from "./evaluationTypes";

export const EvaluationCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="projectId" validate={[required()]} />
      <NumberInput source="systemId" validate={[required()]} />
      <NumberInput source="datasetId" validate={[required()]} />
      <TextInput source="name" validate={[required()]} />
      <SelectInput source="type" validate={[required()]} choices={evaluationTypesSelector} />
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
