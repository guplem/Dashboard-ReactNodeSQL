import { Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, EditButton, required } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput multiline source="content" />
      <DateInput label="Publication date" source="createdAt" />
      <ReferenceManyField label="Comments" reference="comments" target="post_id">
        <Datagrid>
          <TextField source="title" />
          <TextField source="content" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
