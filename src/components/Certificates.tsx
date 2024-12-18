import { Typography, useTheme } from "@mui/material";
import MainTitleComponent from "./MainTitleComponent";
import FullTick from "./FullTick.tsx";

const Certificates = () => {
  const theme = useTheme();
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 ">
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/statisticsIcon.svg"
          title="Certificates"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-10 pt-6">
        <div className="flex  bg-[#212330] items-start gap-3 p-3 md:p-6 w-60 md:w-96 rounded-[10px]">
          <div className="flex items-center pt-2">
            <FullTick />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 26 },
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Passing Certificate
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 20 },
                color: "#646464",
                fontWeight: 400,
                mt: 1,
              }}
            >
              No Passing Certificates
            </Typography>
          </div>
        </div>
        <div className="flex gap-3 bg-[#212330]  p-3 md:p-6 w-60 md:w-96 rounded-[10px]">
          {/* <img className="mt-2" src="/Icons/FullTickIcon.svg" /> */}
          <div className="flex items-start pt-2">
            {" "}
            <FullTick />
          </div>
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 26 },
                color: "white",
              }}
            >
              Payout Certificates
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 20 },
                color: "#646464",
                fontWeight: 400,
                mt: 1,
              }}
            >
              No Payout Certificates
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
