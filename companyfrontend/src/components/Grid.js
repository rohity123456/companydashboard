import "./css/Grid.css";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "age",
    headerName: "AGE",
    type: "number",
    width: 90,
  },
  {
    field: "salary",
    headerName: "SALARY (LPA)",
    type: "number",
    width: 120,
  },
  {
    field: "phoneNo",
    headerName: "PHONE NUMBER",
    width: 120,
  },
];

function Grid({ rows }) {
  // console.log(rows);
  return (
    <div className="grid">
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default Grid;
