import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthIcon from "@mui/icons-material/North";
import { FormControl, TextField, Typography, useTheme } from "@mui/material";
interface ChallengeData {
  iconSrc: string;
  title: string;
  value: number;
  percentage: number;
}
const AffiliatePortalWeb = () => {
  const theme = useTheme();
  const data: ChallengeData[] = [
    {
      iconSrc: "/Icons/failedChallengeIcon.svg",
      title: "Failed Challenges",
      value: 27132,
      percentage: +12,
    },
    {
      iconSrc: "/Icons/fundedTraderIcon.svg",
      title: "Funded Traders",
      value: 27132,
      percentage: +12,
    },
    {
      iconSrc: "/Icons/withDrawIcon.svg",
      title: "Paid out this month",
      value: 27132,
      percentage: -2,
    },
    // Add two more objects with similar structure for other data
  ];
  return (
    <>
      <div
        className={`w-[55%] md:w-[30%] xl:w-[20%] mx-auto mt-12 ${
          theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
        } bg-opacity-5 p-6 rounded-2xl`}
      >
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 26 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Money Earned
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16 },
            color: "#646464",
            mt: 2,
          }}
        >
          Available for payout
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 26 },
            color: "#D6C3F8",
            my: 2,
          }}
        >
          $0.00
        </Typography>
        <button className=" bg-[#FF8F1F] text-white font-medium text-sm font-[Montserrat] cursor-pointer w-full py-2 rounded-md">
          Withdraw
        </button>
        <Typography
          sx={{
            fontSize: { xs: 12, sm: 14 },
            color: "#646464",
            mt: 1,
          }}
        >
          $100 minimum required withdrawal
        </Typography>
      </div>
      <div
        className={`w-[70%] lg:w-[40%] mx-auto mt-8 ${
          theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
        } bg-opacity-5 p-6 rounded-2xl`}
      >
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 22 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Purchased Challenges
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 26 },
            color: theme.palette.mode === "light" ? "black" : "white",
            mt: 2,
          }}
        >
          $0.00
        </Typography>
      </div>

      <div
        className={`w-[70%] lg:w-[40%] mx-auto mt-8 ${
          theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
        } bg-opacity-5 p-6 rounded-2xl`}
      >
        <div className="flex items-center gap-3">
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 22 },
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            Bonus
          </Typography>
          <img src="/Icons/questionMarkIcon.svg" alt="" />
        </div>
        <div className="flex justify-between items-center mt-2 ">
          <div>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Until Next Bonus
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "  #D6C3F8",
              }}
            >
              18%
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Until Next Bonus
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "  #D6C3F8",
              }}
            >
              18%
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
              }}
            >
              Until Next Bonus
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "  #D6C3F8",
              }}
            >
              18%
            </Typography>
          </div>
        </div>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 20 },
            color: theme.palette.mode === "light" ? "black" : "white",
            mt: 2,
          }}
        >
          $0.00
        </Typography>
      </div>
      <div
        className={`w-[94%] lg:w-[50%] mx-auto ${
          theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
        } bg-opacity-5 p-6 mt-8`}
      >
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 26 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Your Unique Link
        </Typography>

        <div className="flex flex-row gap-4 mt-4">
          <FormControl fullWidth>
            <TextField
              id="outlined-adornment-email-login"
              type="text"
              // value={values.email}
              name="text"
              // onBlur={handleBlur}
              // onChange={handleChange}
              placeholder="https://myfundedfx.tech/purchasechallenge/?sl=4469"
              inputProps={{
                style: {
                  height: "0.5rem",
                },
              }}
            />
          </FormControl>

          <button className=" bg-[#FF8F1F] text-white font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
            COPY
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-[350px] lg:h-[276px] rounded-2xl ${
              theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
            } bg-opacity-5 p-3 md:p-6`}
          >
            <div className="flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <img src={item.iconSrc} alt={`Icon for ${item.title}`} />
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: theme.palette.mode === "light" ? "black" : "white",
                    fontSize: 21,
                  }}
                >
                  {item.title}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: theme.palette.mode === "light" ? "black" : "white",
                  fontSize: 40,
                }}
              >
                {item.value}
              </Typography>
              <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  {item.percentage < 0 ? (
                    <>
                      <ArrowDownwardIcon sx={{ color: "#E74545" }} />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#E74545",
                          fontSize: 19,
                        }}
                      >
                        {item.percentage}%
                      </Typography>
                    </>
                  ) : (
                    <>
                      <NorthIcon sx={{ color: "#23C581" }} />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#23C581",
                          fontSize: 19,
                        }}
                      >
                        +{item.percentage}%
                      </Typography>
                    </>
                  )}
                  <Typography
                    sx={{ fontWeight: 400, color: "#707B81", fontSize: 19 }}
                  >
                    on this week
                  </Typography>
                </div>
                <img src="/Icons/editIconSuccess.svg" alt="Edit Icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AffiliatePortalWeb;
