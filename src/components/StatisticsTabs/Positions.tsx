import { Typography } from "@mui/material";
import BarChart1 from "../BarChart1";
import BarChart2 from "../BarChart2";
import useFetchPositions from "../../hooks/useFetchPositions";
import { useEffect, useState } from "react";

const Positions = () => {
  const [accountId, setAccountId] = useState("1169186"); // ID du compte
  const [accNum, setAccNum] = useState("1"); // Numéro de compte
  const [positionData, setPositionData] = useState([]); // Données des positions
  const { data, isLoading, error } = useFetchPositions(accountId, accNum);

  useEffect(() => {
    if (accountId !== "" && accNum !== "") {
      // Récupérer les données des positions
      if (data) {
        setPositionData(data);
      }
    }
  }, [accountId, accNum, data]);
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="w-full [&>*]:!h-full lg:w-[40%]">
          <BarChart1 />
        </div>
        <div className="w-full [&>*]:!h-full lg:w-[40%]">
          {" "}
          <BarChart2 />
        </div>

        <div className="w-full lg:w-[20%] space-y-4">
          <div className="bg-[#212330] flex items-center p-6 flex-col rounded-[10px] py-5">
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Avg Wins
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              $1285.65
            </Typography>
          </div>
          <div className=" bg-[#212330] flex  items-center flex-col rounded-[10px] py-5">
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Avg Wins
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              $1285.65
            </Typography>
          </div>
          <div className=" bg-[#212330] flex  items-center flex-col rounded-[10px] py-5">
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Avg Wins
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              $1285.65
            </Typography>
          </div>
          <div className=" bg-[#212330] flex  items-center flex-col rounded-[10px] py-5">
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Avg Wins
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "Montserrat",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              $1285.65
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex w-[79.5%] flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-4 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Best Trades
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            $1285.65
          </Typography>
        </div>
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-3 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Worst Trades
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            -$1285.65
          </Typography>
        </div>
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-3 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            No Of Trades
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            285
          </Typography>
        </div>
      </div>
      <div className="flex w-[79.5%] flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-3 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Win Rate
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            56.67%
          </Typography>
        </div>
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-3 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Drawdown
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            498
          </Typography>
        </div>
        <div className="w-full md:w-1/3 bg-[#212330] rounded-[10px] flex gap-3 justify-center items-center p-3">
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 14, md: 16 },
            }}
          >
            Profit Fact
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 20, md: 24 },
            }}
          >
            56.67%
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Positions;
