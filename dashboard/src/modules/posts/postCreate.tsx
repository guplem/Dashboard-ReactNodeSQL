import { Create, SimpleForm, TextInput, required, DateTimeInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <RichTextInput source="content" label="What do you want to share?" />
      <DateTimeInput label="Publication date" source="createdAt" defaultValue={new Date()} validate={[required()]} />
    </SimpleForm>
  </Create>
);
