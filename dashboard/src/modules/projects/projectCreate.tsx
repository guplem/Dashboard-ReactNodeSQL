import { Create, SimpleForm, TextInput, required, SelectInput, NumberInput } from "react-admin";
import { projectTypesSelector } from "./projectTypes";

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <SelectInput source="type" validate={[required()]} choices={projectTypesSelector} />
      <NumberInput source="conformityProgress" validate={[required()]} />
    </SimpleForm>
  </Create>
);
