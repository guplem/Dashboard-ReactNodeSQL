import { List, Datagrid, TextField, DateField, RichTextField } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="content" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
