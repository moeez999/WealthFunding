import MainTitleComponent from "./MainTitleComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TextField, Typography, useTheme } from "@mui/material";

const Faq = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 py-6 ">
      {" "}
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/CircleQuestionMarkIcon.svg"
          title="Help and feedback"
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
          disableRipple
          sx={{
            fontSize: { xs: 14, sm: 16 },
            color: "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="FAQs"
        />
        <Tab
          disableRipple
          sx={{
            fontSize: { xs: 14, sm: 16 },
            color: "white",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Leave Feedback"
        />
      </Tabs>
      {value === 0 && (
        <div className="mt-9  bg-[#212330] p-2 md:p-5 rounded-[10px]">
          <Typography
            sx={{
              fontSize: 26,
              color: "white",
            }}
          >
            Ask Question
          </Typography>
          <div className="w-full flex flex-col md:flex-row  items-start   gap-6 mt-3">
            <div className="w-full md:w-[90%]">
              <TextField
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  width: "100%",
                  border: "1px solid white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    borderRadius: 2,
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    height: 38,

                    "& fieldset": {
                      color: "white",
                    },
                  },

                  "& input::placeholder": {
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
                //   onChange={handleChange}
              />
            </div>

            <button className=" bg-[#00BE64] text-black font-medium text-xs font-[Montserrat] cursor-pointer py-3 lg:py-3 w-full md:w-[10%] rounded-[6px]">
              Ask Question
            </button>
          </div>
        </div>
      )}
      {value === 1 && (
        <div className="mt-9 bg-[#212330] w-full p-2 md:p-5 rounded-[10px]">
          <Typography sx={{ fontSize: 16, color: "white" }}>
            Ask Question
          </Typography>
          <div className="flex gap-3 justify-between items-center md:gap-6 mt-4">
            <div className="w-full md:w-[22%] xl:w-[15%]">
              <button className=" bg-[#00BE64] text-black font-medium text-xs font-[Montserrat] cursor-pointer py-1 md:py-2 w-full rounded-[6px]">
                Suggest New Features
              </button>
            </div>
            <div className="w-full md:w-[22%] xl:w-[15%]  border rounded-md border-[white]">
              <button className=" bg-none text-[white] font-medium text-xs font-[Montserrat] cursor-pointer py-1 md:py-2 w-full rounded-[6px]">
                Suggest Improvement
              </button>
            </div>
            <div className="w-full md:w-[22%] xl:w-[15%] border rounded-md border-[white]">
              <button className=" bg-none text-[white] font-medium text-xs font-[Montserrat] cursor-pointer py-1 md:py-2 w-full rounded-[6px]">
                Report A Bug
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
              <Typography sx={{ fontSize: 12, mt: 2, color: "white" }}>
                Describe Your Question
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    height: 36,

                    "& fieldset": {
                      borderRadius: "10px",
                      color: "black",
                    },
                  },

                  "& input::placeholder": {
                    color: "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Typography sx={{ fontSize: 12, mt: 2, color: "white" }}>
                Where should it be added?
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.mode === "light" ? "white" : "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    height: 36,

                    "& fieldset": {
                      borderRadius: "10px",
                      color: "black",
                    },
                  },

                  "& input::placeholder": {
                    color: "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className=" bg-[#00BE64] text-black font-medium text-xs font-[Montserrat] cursor-pointer py-2 px-5  rounded-[6px]">
              Send Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
