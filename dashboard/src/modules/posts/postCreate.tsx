import { Create, SimpleForm, TextInput, DateInput, required } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <RichTextInput source="content" label="What do you want to share?" />
      <DateInput label="Publication date" source="createdAt" defaultValue={new Date()} validate={[required()]} />
    </SimpleForm>
  </Create>
);
