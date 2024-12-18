import { FormControl, TextField, Typography } from "@mui/material";

const DashboardTab = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
        <div
          className={`w-full lg:w-[24%] 2xl:w-[18%] flex flex-col justify-between bg-[#212330] rounded-[10px] p-2 md:p-4`}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26, mt: 2 },
              color: "white",
            }}
          >
            Request Payout
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16 },
              color: "white",
              mt: 2,
            }}
          >
            Available for payout
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 26 },
              color: "#00BE64",
              mt: 1,
            }}
          >
            $0.00
          </Typography>
          <button className=" bg-[#00BE64] text-black font-medium text-sm font-[Montserrat] cursor-pointer w-full py-[10px] rounded-md mt-4">
            Request Payout
          </button>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 10 },
              color: "white",
              mt: 1,
            }}
          >
            $100 minimum required withdrawal
          </Typography>
        </div>

        <div className="bg-[#212330] w-full lg:w-[38%] 2xl:w-[41%]  p-3 md:p-6 rounded-[10px]">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: "white",
            }}
          >
            Your Level:
          </Typography>
          <div className="flex justify-between pt-4">
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Current commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                10%
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Current commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                15%
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Next Commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                20%
              </Typography>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Current commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                10%
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Current commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                15%
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <Typography
                sx={{
                  fontSize: { xs: 9, md: 10 },
                  color: "white",
                }}
              >
                Next Commission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                }}
              >
                20%
              </Typography>
            </div>
          </div>
        </div>

        <div className="bg-[#212330] w-full lg:w-[38%] 2xl:w-[41%] p-3 md:p-6 rounded-[10px]">
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 26 },
              color: "white",
            }}
          >
            Info
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: "white",
              mt: 2,
              lineHeight: "30px",
            }}
          >
            You will receive 8% of all purchases that are made through your
            affiliate link once you have a total of $100, you can request a
            payout by clicking on the REQUEST PAYOUT button below
          </Typography>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-4 lg:mx-0 py-4 ">
        <div className="w-full md:w-1/2 bg-[#212330] p-3 md:p-6 rounded-[10px]">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: "white",
            }}
          >
            Your Unique Link
          </Typography>

          <div className="flex flex-row gap-4 mt-4">
            <FormControl fullWidth>
              <TextField
                placeholder="link"
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    // height: 44,

                    "& fieldset": {
                      borderRadius: "6px",
                    },
                  },

                  "& input::placeholder": {
                    color: "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
                //   onChange={handleChange}
              />
            </FormControl>

            <button className=" bg-[#00BE64] text-black font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
              COPY
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#212330] p-3 md:p-6 rounded-[10px]">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 26 },
              color: "white",
            }}
          >
            Your Unique Code
          </Typography>

          <div className="flex flex-row gap-4 mt-4">
            <FormControl fullWidth>
              <TextField
                placeholder="exotic"
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#dedede",
                    border: "none",

                    borderColor: "none",
                    fontSize: 16,
                    fontFamily: "Montserrat",

                    // height: 44,

                    "& fieldset": {
                      borderRadius: "6px",
                    },
                  },

                  "& input::placeholder": {
                    color: "white",

                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  },
                }}
                //   onChange={handleChange}
              />
            </FormControl>

            <button className=" bg-[#00BE64] text-black font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
              COPY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTab;
