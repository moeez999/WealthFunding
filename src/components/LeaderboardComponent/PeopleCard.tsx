import { Avatar, Box, Typography, useTheme } from "@mui/material";

import { stylesMui } from "./styles";

interface PeopleCardProps {
  index: string;
  avatarImg: string;
  name: string;
  number: string;
  amount: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  index,
  avatarImg,
  name,
  number,
  amount,
}) => {
  const theme = useTheme();
  return (
    <Box sx={stylesMui.personCard}>
      <div
        // className="w-[300px] md:w-[600px] xl:w-[650px] flex justify-between items-center"
        className={`w-[300px] md:w-[600px] xl:w-[650px] flex justify-between items-center rounded-lg ${
          theme.palette.mode === "light"
            ? "bg-gray-700 p-4 bg-opacity-5"
            : "bg-white bg-opacity-[0.005]"
        } `}
        id="person"
      >
        <div className="flex justify-center items-center">
          <Typography sx={stylesMui.indexText}>{index}</Typography>
          <div className="mx-3">
            <Avatar src={avatarImg} sx={{ width: 40, height: 40 }} />
          </div>
          <div className="flex flex-col">
            <Typography sx={stylesMui.personName}>{name}</Typography>
            <Typography sx={stylesMui.traderText}>{number}</Typography>
          </div>
        </div>
        <Typography sx={stylesMui.amountText}>{amount}</Typography>
      </div>
    </Box>
  );
};

export default PeopleCard;
