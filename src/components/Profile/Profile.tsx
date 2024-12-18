import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountTab from "./AccountTab";
import UpdatePasswordTab from "./UpdatePasswordTab";
import MainTitleComponent from "../MainTitleComponent";

const profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="px-5 py-1">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <MainTitleComponent Image="/Icons/profileComIcon.svg" title="Profile" rules={false} />
          </div>
          <button className={`w-[30%] md:w-[10%] rounded-[4px] cursor-pointer h-8 bg-[#00BE64] text-black text-xs ${value === 1 ? "hidden" : "block"}`}>
            Save
          </button>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            mt: 2,
            fontFamily: "Montserrat",
            "& button:focus": {
              color: "white",
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
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="My Account"
          />
          <Tab
            disableRipple
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Update Password"
          />
        </Tabs>
        {value === 0 && (
          <div className="mt-9">
            <AccountTab />
          </div>
        )}
        {value === 1 && (
          <div className="mt-9">
            <UpdatePasswordTab />
          </div>
        )}
      </div>
    </>
  );
};

export default profile;
