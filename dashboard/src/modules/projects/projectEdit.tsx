import { RichTextInput } from "ra-input-rich-text";
import { Edit, SimpleForm, TextInput, required, DateTimeInput, SelectInput, NumberInput } from "react-admin";
import { projectTypesSelector } from "./projectTypes";

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={[required()]} />
      <SelectInput source="type" validate={[required()]} choices={projectTypesSelector} />
      <NumberInput source="conformityProgress" validate={[required()]} />
    </SimpleForm>
  </Edit>
);
