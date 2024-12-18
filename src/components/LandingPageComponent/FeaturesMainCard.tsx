import { Typography } from "@mui/material";

import FeaturesMainCardImg from "../../assets/images/landing/featuresMainCard.png";

import { stylesMui } from "./styles";

const FeaturesMainCard = () => {
  return (
    <div
      className="px-[2.62rem] pt-[1.88rem] rounded-xl flex flex-col items-center"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      <div id="content" className="mt-6 gap-1">
        <Typography
          sx={{ ...stylesMui.featureCardHeading, textAlign: "center" }}
        >
          Android & IOS App
        </Typography>
        <Typography sx={{ ...stylesMui.featureCardBody, textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div id="image" className="mt-5">
        <img src={FeaturesMainCardImg} alt="title" className="w-[18.07rem]" />
      </div>
    </div>
  );
};

export default FeaturesMainCard;
