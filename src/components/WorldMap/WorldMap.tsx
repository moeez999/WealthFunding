import { Typography } from "@mui/material";

import WorldMapImage from "../../assets/images/worldMap.png";

import { stylesMui } from "./styles";

const WorldMap = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {" "}
      <div
        className="w-[90%] lg:w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            People Are using
            <br />
            <span className="text-[#00BE64] ml-2">
              Wealth Funding Around the Globe!
            </span>
          </Typography>
          <Typography sx={{ ...stylesMui.bodyText, color: "#fff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Feugiat nulla suspendisse tortor aene.
          </Typography>
        </div>
      </div>
      <div id="image" className="mt-14 px-20 w-full">
        <img src={WorldMapImage} alt="world" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default WorldMap;
