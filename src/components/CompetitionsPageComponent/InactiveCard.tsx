import { Box, Typography, useTheme } from "@mui/material";

import ContestHamburger from "../../assets/icons/ContestHamburger";
import ContestMessage from "../../assets/icons/ContestMessage";
import ContestTrophy from "../../assets/icons/ContestTrophy";

import { stylesMui } from "./styles";

interface InactiveCardProps {
  competitionTitle: string;
  competitionDescription: string;
  submissionsCount: string;
  maxScore: string;
  difficulty: string;
}

const InactiveCard: React.FC<InactiveCardProps> = ({
  competitionTitle,
  competitionDescription,
  submissionsCount,
  maxScore,
  difficulty,
}) => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "light" ? "black" : "white";
  return (
    <Box sx={stylesMui.cardInactiveBox}>
      <div className="w-full flex justify-between" id="header">
        <Typography sx={stylesMui.cardTitle}>{competitionTitle}</Typography>
        <div className="flex items-center gap-6" id="icons">
          <ContestMessage strokeColor={iconColor} />
          <ContestTrophy fillColor={iconColor} />
          <ContestHamburger strokeColor={iconColor} />
        </div>
      </div>
      <div className="flex mt-3 md:mt-6" id="body">
        <Typography sx={stylesMui.cardText}>
          {competitionDescription}
        </Typography>
      </div>
      <div className="mt-3 md:mt-6 flex justify-between" id="footer">
        <div className="flex items-center gap-3 md:gap-5 xl:gap-7">
          <div>
            <Typography sx={stylesMui.cardFooter}>
              Submissions:{" "}
              <span style={{ color: "white" }}>{submissionsCount}</span>
            </Typography>
          </div>
          <div>
            <Typography sx={stylesMui.cardFooter}>
              Max Score: <span style={{ color: "white" }}>{maxScore}</span>
            </Typography>
          </div>
          <div>
            <Typography sx={stylesMui.cardFooter}>
              Difficulty: <span style={{ color: "white" }}>{difficulty}</span>
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default InactiveCard;
