import { InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import MainTitleComponent from "./MainTitleComponent";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import HeaderSearchIcon from "../assets/icons/HeaderSearchIcon";
import Pagination from "./Pagination";

const columns: GridColDef[] = [
  {
    field: "openTime",
    headerName: "Open Time",
    width: 150,
    editable: false,
  },
  {
    field: "openPrice",
    headerName: "Open Price",
    width: 150,
    editable: false,
  },
  {
    field: "closePrice",
    headerName: "Close Price",
    width: 150,
    editable: false,
  },

  {
    field: "position",
    headerName: "Position",
    width: 150,
    editable: false,
  },
  {
    field: "side",
    headerName: "Side",
    width: 150,
    editable: false,
    renderCell: (params) => {
      const side = params.row.side;
      const color =
        side === "Sell" ? "#FF0000" : side === "Buy" ? "#14FF00" : "";

      return <div style={{ color }}>{side}</div>;
    },
  },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 150,
    editable: false,
  },
  {
    field: "volume",
    headerName: "Volume",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "profit",
    headerName: "Profit",
    type: "number",
    width: 150,
    editable: false,
    renderCell: (params) => {
      const side = params.row.side;
      const profit = params.row?.profit;
      const color =
        side === "Sell" ? "#FF0000" : side === "Buy" ? "#14FF00" : "";

      return <div style={{ color }}>{profit}</div>;
    },
  },
];

const rows = [
  {
    id: 1,
    openTime: "Open Time 1",
    openPrice: 100.5,
    closePrice: 105.2,

    position: 35,
    side: "Sell",
    symbol: "XYZ",
    volume: 1000,
    profit: 200,
  },
  {
    id: 2,
    openTime: "Open Time 2",
    openPrice: 150.2,
    closePrice: 155.7,
    date: "2023-01-02",
    position: 42,
    side: "Buy",
    symbol: "ABC",
    volume: 1500,
    profit: 300,
  },
  // Add more rows as needed
];
const Billing = () => {
  const theme = useTheme();
  return (
    <div className="mx-4 sm:px-6 xl:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent Image="/Icons/statisticsIcon.svg" title="Billing" />
      </div>
      <div className="bg-[#212330] px-6 py-3 rounded-[8px] xl:w-[20%] mt-6">
        <div className="flex justify-between items-center">
          <Typography sx={{ fontWeight: 500, fontSize: 12 }}>
            Purchase a physical copy
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 16 }}>$0.00</Typography>
        </div>
        <button className="bg-[#00BE64] text-black mt-2 font-medium h-8 rounded-md text-xs w-full">
          Buy
        </button>
      </div>
      <div className="p-3 md:p-6 rounded-[8px] mt-8 bg-[#212330]">
        <div className="flex justify-between items-center mb-6">
          <Typography
            sx={{
              fontSize: 24,
              color: theme.palette.mode === "light" ? "#000000" : "white",
            }}
          >
            Accounts
          </Typography>
          <TextField
            placeholder="Search..."
            size="small"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: theme.palette.mode === "light" ? "#000000" : "#dedede",
                border: "none",

                borderColor: "none",
                fontSize: 16,
                fontFamily: "Montserrat",

                height: 44,

                "& fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "black" : "gray",
                  borderRadius: "10px",
                  color: "#000000",
                },
              },

              "& input::placeholder": {
                color: theme.palette.mode === "light" ? "#000000" : "white",

                fontSize: "18px",
                fontWeight: 400,
                fontFamily: "Montserrat",
              },
            }}
            //   onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeaderSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
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
    </div>
  );
};

export default Billing;
