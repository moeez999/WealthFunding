import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, Typography, useTheme } from "@mui/material";
interface TradingPackage {
  id: number;
  title: string;
  tradeLimit: string;
  packageOptions: string[];
  minTradingDays: number;
  maxInitialAccountBalanceLoss: string;
  maxDailyLoss: string;
}
const BillingWeb = () => {
  const theme = useTheme();
  const tradingPackages: TradingPackage[] = [
    {
      id: 1,
      title: "2-Step",
      tradeLimit: "Trade up to $300K",
      packageOptions: [
        "Package: 10k",
        "Package 2: 25k",
        "Package 3: 50k",
        "Package 4: 100k",
        "Package 5: 200k",
      ],
      minTradingDays: 1,
      maxInitialAccountBalanceLoss: "8%",
      maxDailyLoss: "8%",
    },
    {
      id: 2,
      title: "2-Step pro",
      tradeLimit: "Trade up to $300K",
      packageOptions: [
        "Package: 10k",
        "Package 2: 25k",
        "Package 3: 50k",
        "Package 4: 100k",
        "Package 5: 200k",
      ],
      minTradingDays: 1,
      maxInitialAccountBalanceLoss: "8%",
      maxDailyLoss: "8%",
    },
    {
      id: 3,
      title: "1 step",
      tradeLimit: "Trade up to $300K",
      packageOptions: [
        "Package: 10k",
        "Package 2: 25k",
        "Package 3: 50k",
        "Package 4: 100k",
        "Package 5: 200k",
      ],
      minTradingDays: 1,
      maxInitialAccountBalanceLoss: "8%",
      maxDailyLoss: "8%",
    },
    // Add more trading packages as needed
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
            Challenge Pricing
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}>
            Pick from a wide range of our programs, which are made to meet the
            needs of traders at every point of their journey.
          </Typography>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
          {tradingPackages.map((packageItem) => (
            <Card key={packageItem.id} sx={{ width: 320, p: { xs: 1, md: 2 } }}>
              <div className="flex justify-between items-center">
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? { fontSize: 24, color: "black" }
                      : { fontSize: 24, color: "#ffffff" }
                  }
                >
                  {packageItem.title}
                </Typography>
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? { fontSize: 16, color: "black" }
                      : { fontSize: 16, color: "#D6C3F8" }
                  }
                >
                  {packageItem.tradeLimit}
                </Typography>
              </div>
              <Typography
                sx={
                  theme.palette.mode === "light"
                    ? {
                        fontSize: 16,
                        color: "black",
                        mt: 4,
                        lineHeight: "30.82px",
                      }
                    : {
                        fontSize: 16,
                        color: "#646464",
                        mt: 4,
                        lineHeight: "30.82px",
                      }
                }
              >
                {packageItem.packageOptions.join(" | ")}
              </Typography>
              <div className="flex justify-between items-center mt-5">
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  Minimum Trading Days
                </Typography>
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  {packageItem.minTradingDays}
                </Typography>
              </div>
              <div className="flex justify-between items-center mt-5">
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  Max Initial Account Balance Loss
                </Typography>
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  {packageItem.maxInitialAccountBalanceLoss}
                </Typography>
              </div>
              <div className="flex justify-between items-center mt-5">
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  Maximum daily loss
                </Typography>
                <Typography
                  sx={
                    theme.palette.mode === "light"
                      ? {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "black",
                        }
                      : { fontSize: 11, fontWeight: 400, color: "#ffffff" }
                  }
                >
                  {packageItem.maxDailyLoss}
                </Typography>
              </div>
              <button className="font-[Montserrat] text-xs font-medium text-white w-full h-10 bg-[#FF8F1F] mt-5 rounded-md">
                Start the {packageItem.title} challenge
              </button>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 30, md: 48 },
              mt: 8,
            }}
          >
            Frequently asked questions
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#646464",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            Can’t find the anwser you’re looking for ? Reach out to customer
            support team.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon />
          </div>
        </div>

        <div className="flex justify-between mx-6 md:mx-12 items-center p-4 flex-wrap mt-8 bg-white bg-opacity-5 rounded-xl">
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
        </div>
      </div>
    </>
  );
};

export default BillingWeb;
