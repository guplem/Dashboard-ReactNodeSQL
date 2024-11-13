import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
    </Datagrid>
  </List>
);
