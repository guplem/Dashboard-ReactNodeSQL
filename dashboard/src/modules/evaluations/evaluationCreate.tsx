import { Create, SimpleForm, TextInput, required, DateTimeInput, SelectInput, NumberInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { evaluationTypesSelector } from "./evaluationTypes";

export const EvaluationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={[required()]} />
      <SelectInput source="type" validate={[required()]} choices={evaluationTypesSelector} />
      <NumberInput source="conformityProgress" validate={[required()]} />
    </SimpleForm>
  </Create>
);
