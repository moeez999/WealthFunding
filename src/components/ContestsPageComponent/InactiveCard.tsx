import { Box, Button, Typography, useTheme } from "@mui/material";

import ContestHamburger from "../../assets/icons/ContestHamburger";
import ContestMessage from "../../assets/icons/ContestMessage";
import ContestTrophy from "../../assets/icons/ContestTrophy";

import { stylesMui } from "./styles";

interface InactiveCardProps {
  challengeTitle: string;
  challengeDescription: string;
  contestantsCount: string;
  enrolledCount: string;
  winner: string;
}

const InactiveCard: React.FC<InactiveCardProps> = ({
  challengeTitle,
  challengeDescription,
  contestantsCount,
  enrolledCount,
  winner,
}) => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "light" ? "black" : "white";
  return (
    <Box sx={stylesMui.cardInactiveBox}>
      <div className="w-full flex justify-between" id="header">
        <Typography sx={stylesMui.cardTitle}>{challengeTitle}</Typography>
        <div className="flex items-center gap-6" id="icons">
          <ContestMessage strokeColor={iconColor} />
          <ContestTrophy fillColor={iconColor} />
          <ContestHamburger strokeColor={iconColor} />
        </div>
      </div>
      <div className="flex mt-3 md:mt-6" id="body">
        <Typography sx={stylesMui.cardText}>{challengeDescription}</Typography>
      </div>
      <div className="mt-3 md:mt-6 flex justify-between" id="footer">
        <div className="flex items-center gap-3 md:gap-5 xl:gap-7">
          <div>
            <Typography sx={stylesMui.cardFooter}>
              Submissions:{" "}
              <span
                style={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                {contestantsCount}
              </span>
            </Typography>
          </div>
          <div>
            <Typography sx={stylesMui.cardFooter}>
              Max Score:{" "}
              <span
                style={{
                  color: theme.palette.mode === "light" ? "black" : "white",
                }}
              >
                {enrolledCount}
              </span>
            </Typography>
          </div>
        </div>
        <div>
          <Typography sx={stylesMui.challengeWinner}>
            Winner: {winner}
          </Typography>
        </div>
      </div>
      <div className="mt-3 md:mt-6">
        <Button sx={stylesMui.cardButton}>
          <Typography sx={stylesMui.cardButtonText}>View Challenge</Typography>
        </Button>
      </div>
    </Box>
  );
};

export default InactiveCard;
