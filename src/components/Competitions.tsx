import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import CompetitionModal from "./CompetitionModal";
import CompetitionModal1 from "./CompetitionModal1";
import MainTitleComponent from "./MainTitleComponent";
import LiveIcon from "../assets/icons/popular.svg"

interface Competition {
  month: string;
  prize: string;
  status: string;
  contestants: number;
}
const Competitions = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  // const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const theme = useTheme();
  const competitionData: Competition[] = [
    {
      month: "March",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Live",
      contestants: 121,
    },
    {
      month: "April",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "May",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "June",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "July",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "Sept",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "Oct",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "Nov",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
    {
      month: "Dec",
      prize: "$1,950 In cash prizes + Challenge accounts",
      status: "Ended",
      contestants: 121,
    },
  ];
  return (
    <div className="mx-6 lg:mx-10">
      <CompetitionModal handleClose={handleClose} open={open} />
      <CompetitionModal1 handleClose={handleClose1} open={open1} />
      <div className="flex flex-col md:flex-row justify-between gap-y-4">
        <MainTitleComponent
          Image="/Icons/competitionActive.svg"
          title="Competitions"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-8">
        {competitionData?.map((competition, index) => (
          <div
            key={index}
            className="w-full md:w-[330px] lg:w-[341px] xl:w-[370px] p-5 md:p-5 bg-[#212330] rounded-[30px]"
          >
            <div className="flex justify-between gap-y-4 items-start md:items-center cursor-pointer">
              <div className="flex flex-row gap-3 items-center">
                <img
                  src="/Icons/competitionActive.svg"
                  width={26}
                  height={26}
                  alt="Competition Icon"
                />
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                  variant="body1"
                >
                  {competition.month} Competition
                </Typography>
              </div>
              <div className="bg-white bg-opacity-5 flex gap-2 p-2 rounded-[10px] items-center">
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 700,
                    color:
                      competition?.status === "Live" ? "#FF8F1F" : "#BEC0C9",
                  }}
                  variant="body1"
                >
                  {competition?.status}
                </Typography>
                {competition?.status === "Live" && (
                  <img src={LiveIcon} alt="fire" />
                )}
              </div>
            </div>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 16,
                color: "white",
                mt: 2,
              }}
              variant="body1"
            >
              {competition.prize}
            </Typography>
            <div className="flex justify-between gap-y-4 mt-3">
              <div className="flex flex-row gap-3 items-center">
                <img src="/Icons/contestants.svg" />
                <Typography
                  sx={{
                    fontSize: 18,
                    color: "white",
                  }}
                  variant="body1"
                >
                  {competition.contestants} Contestants
                </Typography>
              </div>

              {competition?.status === "Live" && (
                <div className="bg-[#FF8F1F] h-10 rounded-[8px] w-10 flex justify-center items-center py-auto cursor-pointer">
                  <KeyboardArrowRightIcon sx={{ color: "black" }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
