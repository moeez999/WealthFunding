import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthIcon from "@mui/icons-material/North";
import { Typography, useTheme } from "@mui/material";
import StatisticsWebChart from "./StatisticWebChart";
interface ChallengeData {
  iconSrc: string;
  title: string;
  value: number;
  percentage: number;
}

const StatisticsWeb = () => {
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
      <div className="mx-5 md:mx-12 xl:mx-32 mt-12">
        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: 64,
            }}
          >
            Statistics
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}>
            "Trading is a difficult trade, we only encourage seasoned traders to
            use our service.
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: 36,
              mt: 9,
            }}
          >
            Client success rate
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: "#646464", fontSize: 20, mt: 2 }}
          >
            Trading is difficult, Thats why we encourage seasoned traders to
            utilize our platform. It is not ideal for new traders.
          </Typography>
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
        <div className="bg-white bg-opacity-5 p-6 mt-16 rounded-2xl">
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 20, md: 28, lg: 40 },
              ml: 2,
            }}
          >
            Reports
          </Typography>
          <StatisticsWebChart />
        </div>
      </div>
    </>
  );
};

export default StatisticsWeb;
