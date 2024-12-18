import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Leaderboardtable = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: false,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: false,
    },
    {
      field: "profit",
      headerName: "Profit",
      width: 200,
      editable: false,
    },

    {
      field: "public",
      headerName: "Public",
      width: 150,
      editable: false,
      renderCell: () => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 border-4 border-[#FF8F1F] bg-[#303343] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#303343] dark:peer-focus:ring-[#303343]-800 rounded-full peer dark:bg-[#303343]-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#FF8F1F] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#FF8F1F] after:border-[#FF8F1F]  after:rounded-2xl after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff8f1f8d]"></div>
        </label>
      ),
    },
    {
      field: "conditions",
      headerName: "Conditions",
      width: 200,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      user: "ABC",
      profit: "$756",
      public: "",
      conditions: ">>54",
    },
    {
      id: 2,
      user: "ABC",
      profit: "$756",
      public: "",
      conditions: ">>54",
    },
  ];
  return (
    <>
      <DataGrid
        sx={{
          border: "none",
          ".MuiDataGrid-cell": {
            border: "none",
            color: "white",
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: 500,
          },
          ".MuiDataGrid-columnHeaders": {
            color: "white",
            fontSize: "14px",
            bgcolor: "#212330",
            fontFamily: "Montserrat",
            fontWeight: 500,
            borderRadius: "8px",
          },
        }}
        rows={rows}
        //@ts-ignore
        getRowId={(row: any) => {
          return row?.id;
        }}
        columns={columns}
        hideFooter
        checkboxSelection
        // disableRowSelectionOnClick
      />
    </>
  );
};

export default Leaderboardtable;
