import { Create, SimpleForm, TextInput, required, DateTimeInput, SelectInput, NumberInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
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
