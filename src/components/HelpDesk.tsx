import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "./Pagination";

const columns: GridColDef[] = [
  {
    field: "editFaq",
    headerName: "Edit FAQs",
    width: 300,
    editable: false,
  },
  {
    field: "liveChat",
    headerName: "Hanlde Live Chat",
    width: 300,
    editable: false,
  },
  {
    field: "ticket",
    headerName: "Support tickets",
    width: 300,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    editFaq: "Edit FAQs",
    liveChat: "Handle live chat",
    ticket: "Support tickets",
  },
  {
    id: 2,
    editFaq: "Edit FAQs",
    liveChat: "Handle live chat",
    ticket: "Support tickets",
  },
];

const HelpDesk = () => {
  const theme = useTheme();
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  return (
    <>
      <div className="mx-4 md:xl:mx-8 xl:mx-12">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px]">
          Help Desk
        </div>
        <div className="font-normal text-[#00BE64] font-[Montserrat] text-[14px] lg:text-[18px]">
          Set up the profit targets & draw-down limits.
        </div>
        <div className="font-medium text-[#221835] font-[Montserrat] text-[14px] lg:text-[24px] line-[29.3px] mt-4">
          support@wealthfunding.com
        </div>

        <div className="flex flex-col md:flex-row  gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
          <div className="flex flex-row gap-3 items-center">
            <button className=" bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>
            <div className="">
              <FormControl>
                <TextField
                  placeholder="Search for affiliates..."
                  size="small"
                  sx={{
                    input: {
                      "&::placeholder": {
                        color: "#959BA4",
                        opacity: 1,
                      },
                    },
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      height: 48,
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  variant="outlined"
                  //   onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <SearchIcon /> */}
                        <img
                          src="../../Icons/SearchAffiliateIcon.svg"
                          width={25}
                          height={25}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-3 gap-y-6">
            <button className=" bg-white text-white cursor-pointer  p-[0.75rem] rounded-md">
              <div className="flex items-center gap-x-1">
                <AddIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal font-[Montserrat] text-[#646464]">
                  New
                </div>
              </div>
            </button>
            <FormControl
              sx={{
                "& .MuiFormControl-root": {
                  // height: 160,
                },
              }}
            >
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#ffffff",
                  width: 180,
                  height: 48,
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      width={50}
                      height={50}
                      src="../../Icons/dateIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">Date</InputLabel>
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 16,

                      border: "1px solid #E2E5E7",

                      "&:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
                      },

                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
                      },
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          className={`p-3 md:p-6 rounded-[8px] mt-4 ${
            theme.palette.mode === "light"
              ? "bg-black bg-opacity-10"
              : "bg-white bg-opacity-5"
          }`}
        >
          <DataGrid
            sx={{
              ".MuiDataGrid-columnHeaders": {
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: 500,
                borderRadius: "8px",
              },
              "& .MuiDataGrid-row": {
                fontFamily: "Montserrat",
                fontWeight: 500,
                color: "#0F0B19",
                fontSize: "14px",
              },
            }}
            rows={rows}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            getRowId={(row: any) => {
              return row?.id;
            }}
            columns={columns}
            hideFooter
            checkboxSelection
            // disableRowSelectionOnClick
          />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default HelpDesk;
