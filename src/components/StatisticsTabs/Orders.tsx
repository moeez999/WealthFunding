import { Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";

const columns: GridColDef[] = [
  {
    field: "Time",
    headerName: "Time",
    width: 250,
    editable: false,
  },
  {
    field: "Message",
    headerName: "Message",
    width: 250,
    editable: false,
  },
  {
    field: "Details",
    headerName: "Details",
    width: 250,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    Time: "Open Time 1",
    Message: 100.5,
    Details: 105.2,
  },
];

const Orders = () => {
  const theme = useTheme();
  return (
    <>
      <div className="p-3 md:p-6 rounded-[8px] bg-[#212330]">
        <Typography
          sx={{
            fontSize: 24,
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Closed Trades
        </Typography>

        <DataGrid
          sx={{
            border: "none",
            ".MuiDataGrid-cell": {
              border: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            },
            ".MuiDataGrid-columnHeaders": {
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              borderRadius: "8px",
            },
            ".MuiDataGrid-row": {},
          }}
          rows={rows}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getRowId={(row: any) => {
            return row?.id;
          }}
          columns={columns}
          hideFooter
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </div>
      <Pagination />
    </>
  );
};

export default Orders;
