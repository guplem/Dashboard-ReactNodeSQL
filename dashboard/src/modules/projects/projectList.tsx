import { List, Datagrid, TextField, ChipField, BulkUpdateButton, BulkDeleteButton, BulkExportButton, BulkActionsToolbar } from "react-admin";
import { PercentageField } from "../../utils/components/percentageField";
import { Button } from "@mui/material";
import { useListContext } from "react-admin";
import jsPDF from "jspdf";

const PostBulkActionButtons = () => (
  <>
    <BulkActionsToolbar />
    <BulkDeleteButton />
    <BulkExportButton />
  </>
);

const fakeData = [
  {
    id: 1,
    name: "Project Alpha",
    type: "Development",
    conformityProgress: 0.85,
  },
  {
    id: 2,
    name: "Project Beta",
    type: "Research",
    conformityProgress: 0.75,
  },
  {
    id: 3,
    name: "Project Gamma",
    type: "Testing",
    conformityProgress: 0.95,
  },
];

export const ProjectList = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const doc = new jsPDF();

          doc.autoTable({
            head: [["ID", "Name", "Type", "Conformity Progress"]],
            body: fakeData.map((row) => [row.id, row.name, row.type, row.conformityProgress]),
          });

          doc.save("table.pdf");
        }}
      >
        Export PDF
      </Button>

      <List>
        <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
          {/* <TextField source="id" /> */}
          <TextField source="name" />
          <ChipField source="type" />
          <PercentageField source="conformityProgress" decimalPlaces={1} />
        </Datagrid>
      </List>
    </>
  );
};
