import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from "react-admin";

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <RichTextField source="content" />
      <DateField label="Publication date" source="createdAt" />
    </SimpleShowLayout>
  </Show>
);
