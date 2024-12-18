// import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material";
import { useState } from "react";
import OverviewTab from "./StatisticsTabs/OverviewTab";

import SystemTab from "./StatisticsTabs/SystemTab";
import Dropdown from "./Dropdown/Dropdown";
import Accounts from "./StatisticsTabs/Accounts";
import Orders from "./StatisticsTabs/Orders";

import Positions from "./StatisticsTabs/Positions";
import MainTitleComponent from "./MainTitleComponent";
const Statistics = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="py-6 sm:py-[0px] p-3 sm:p-8 ">
      <div className="flex items-center gap-3">
        <MainTitleComponent Image="/Icons/statisticsIcon.svg" title="Statistics" rules={false} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 my-8">
        <div className="flex gap-6 items-center w-full px-4 md:px-0 md:w-auto">
          <Dropdown />
        </div>

        {(value === 0 || value === 1 || value === 2) && (
          <div className="flex flex-wrap lg:flex-row gap-3 md:gap-6 items-center px-4 sm:px-[0px]">
            <button
              className={`bg-[#00BE64] text-black
              cursor-pointer font-medium font-[Montserrat] text-sm xl:text-lg h-[40px] w-[60px] md:w-[90px] lg:w-[90px] xl:h-[46px] xl:w-[134px] rounded-md`}
            >
              Passed
            </button>
            <button
              className="bg-[#00BE64] text-[#DEDEDE] cursor-pointer h-[40px] w-[114px] md:w-[90px] xl:h-[46px] lg:w-[90px] xl:w-[150px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid black" }}
            >
              Withdrawal
            </button>

            <button
              className="bg-[#00BE64] text-[#DEDEDE] cursor-pointer h-[40px] w-[114px] md:w-[90px] lg:w-[95px] xl:h-[46px] xl:w-[134px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid black" }}
            >
              Credentials
            </button>
          </div>
        )}
        {(value === 3 || value === 4) && (
          <div className="flex flex-wrap lg:flex-row gap-6 items-center px-4 sm:px-[0px]">
            <button
              className={`bg-[#00BE64] text-black
              cursor-pointer font-medium font-[Montserrat] text-sm xl:text-lg h-[40px] w-[134px] md:w-[90px] lg:w-[90px] xl:h-[46px] xl:w-[134px] rounded-md`}
            >
              Failed
            </button>
            <button
              className="bg-[#303343] text-[#DEDEDE] cursor-pointer h-[40px] w-[120px] md:w-[90px] lg:w-[95px] xl:h-[46px] xl:w-[134px] rounded-lg font-medium text-sm xl:text-lg font-[Montserrat]"
              style={{ border: "1px solid black" }}
            >
              Credentials
            </button>
          </div>
        )}
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          fontFamily: "Montserrat",
          "& button:focus": {
            color: theme.palette.mode === "light" ? "black" : "white",
          },

          "& .MuiTab-root.Mui-selected": {
            color: "#00BE64",
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            fontFamily: "Montserrat",
          },
        }}
        TabIndicatorProps={{
          sx: { bgcolor: "#00BE64" },
        }}
      >
        <Tab
          disableRipple 
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Overview"
        />
        <Tab
          disableRipple
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="System"
        />
        <Tab
          disableRipple
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Accounts"
        />
        <Tab
          disableRipple
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Positions"
        />
        <Tab
          disableRipple
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: theme.palette.mode === "light" ? "black" : "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Orders"
        />
      </Tabs>
      {value === 0 && (
        <div className="mt-9">
          <OverviewTab />
        </div>
      )}
      {value === 1 && (
        <div className="mt-9">
          <SystemTab />
        </div>
      )}
      {value === 2 && (
        <div className="mt-9">
          <Accounts />
        </div>
      )}
      {value === 3 && (
        <div className="mt-9">
          {" "}
          <Positions />{" "}
        </div>
      )}
      {value === 4 && (
        <div className="mt-9">
          <Orders />
        </div>
      )}
    </div>
  );
};

export default Statistics;
