import { RichTextInput } from "ra-input-rich-text";
import { Edit, SimpleForm, TextInput, required, DateTimeInput } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={[required()]} />
      <RichTextInput source="content" />
      <DateTimeInput label="Publication date" source="createdAt" validate={[required()]}/>
    </SimpleForm>
  </Edit>
);
