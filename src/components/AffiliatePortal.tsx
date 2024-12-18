import MainTitleComponent from "./MainTitleComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import DashboardTab from "./AffiliateTabs/DashboardTab";
import StatsTab from "./AffiliateTabs/StatsTab";
import PayoutsTabs from "./AffiliateTabs/PayoutsTabs";

const AffiliatePortal = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mx-4 sm:mx-6 xl:mx-10">
        {" "}
        <div className="flex flex-col md:flex-row justify-between gap-y-4 pb-3">
          <MainTitleComponent
            Image="/Icons/share.svg"
            title="Affiliate Portal"
          />
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            fontFamily: "Montserrat",
            "& button:focus": {
              color: "#00BE64",
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
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Dashboard"
          />
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Stats"
          />
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Payouts"
          />
        </Tabs>
        {value === 0 && <DashboardTab />}
        {value === 1 && <StatsTab />}
        {value === 2 && <PayoutsTabs />}
      </div>
    </>
  );
};

export default AffiliatePortal;
