import { Box, Typography, useTheme, LinearProgress } from "@mui/material";
import Chart from "../Chart";
import QuestionMarkIcon from "../QuestionMarkIcon";

const OverviewTab = () => {
  const theme = useTheme();

  return (
    <>
      <div className=" mt-3">
        <div className="flex flex-col lg:flex-row gap-4 mt-3">
          <div className="w-full [&>*]:!h-full lg:w-[65%] ">
            <Chart />
          </div>
          <div className="w-full space-y-3.5 lg:w-[35%]">
            <div className="bg-[#212330] rounded-[10px] p-6">
              <div className="flex justify-between items-center">
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  Net Profit/Loss
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00BE64",
                  }}
                >
                  +12.4%
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: 18,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                $3,100
              </Typography>
            </div>
            <div className="shadow-lg bg-[#212330] rounded-[10px] p-6">
              <div className="flex justify-between items-center">
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  Target Profit
                </Typography>
                <Typography
                  sx={{
                    color: "#00BE64",
                  }}
                >
                  6%
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: 18,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                $27,000.00
              </Typography>
            </div>
            <div className="bg-[#212330] rounded-[10px] p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    Current Equity
                  </Typography>
                  {/* <QuestionMarkIcon /> */}
                </div>
                <Typography
                  sx={{
                    color: "#00BE64",
                  }}
                  variant="body2"
                >
                  6%
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: 18,
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                $28,100
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 ">
        <div className="flex flex-col lg:w-1/2 gap-4">
          <div className=" w-full rounded-[10px] p-6 bg-[#212330]">
            <Typography variant="body1" sx={{ color: "white" }}>
              Time Remaining
            </Typography>

            <Typography sx={{ fontSize: 12, color: "white", mt: 1 }}>
              Daily Drawdown Reset Time
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                color: "white",
                fontSize: { xs: "16", md: 20 },
              }}
            >
              No Time Restriction
            </Typography>
          </div>
          <div className=" w-full rounded-[10px] p-6 bg-[#212330]">
            <div className="flex justify-between items-center">
              <div className="flex items gap-2">
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: { xs: 16, md: 20 },
                  }}
                >
                  Prevous Balance
                </Typography>
                <img src="/Icons/WhiteQuestionMark.svg" />
              </div>
              <Typography
                variant="body1"
                sx={{
                  color: "#00BE64",
                  fontSize: { xs: 16, md: 20 },
                  fontWeight: 600,
                }}
              >
                +12.4%
              </Typography>
            </div>

            <Typography
              sx={{
                color: "white",
                fontSize: { xs: 16, md: 18 },
                mt: 1,
              }}
            >
              $25,000
            </Typography>
          </div>
        </div>
        <div className=" rounded-[10px] p-6 xl:w-1/2 bg-[#212330]">
          <div className="flex gap-2 items-center">
            <Typography
              variant="body1"
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            >
              Max Loss Limit
            </Typography>
            <img src="Icons/WhiteQuestionMark.svg" />
          </div>
          <Box sx={{ my: 4 }}>
            <LinearProgress
              variant="determinate"
              value={25} // Set the progress value (0 to 100)
              sx={{
                ".MuiLinearProgress-bar": {
                  bgcolor: "#00BE64",
                },
              }}
            />
          </Box>

          <div className="flex flex-wrap sm:flex-nowrap justify-between items-start mt-4 gap-4 md:gap-8 ">
            <div className="flex flex-col gap-y-2 ">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Loss Level
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Balance Start Of Day
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap justify-between items-start mt-4 gap-4 md:gap-8 ">
            <div className="flex flex-col gap-y-2 ">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Loss Level
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Initial Deposit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2">
              <Typography
                sx={{
                  fontSize: { xs: 10 },
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                Balance Start Of Day
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14 },
                  color: theme.palette.mode === "light" ? "black" : "#00BE64",
                }}
              >
                $24,578.2
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
