import { List, Datagrid, TextField, DateField } from "react-admin";

export const PostList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
