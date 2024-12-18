import { Typography } from "@mui/material";

import AppIcon from "../../assets/images/appleCta.svg";
import PlaystoreIcon from "../../assets/images/playstoreCta.svg";
import CtaButton from "./CtaButton";
import { stylesMui } from "./styles";

const CtaBox = () => {
  return (
    <div
      className="py-11 pl-[2.12rem] pr-[3.44rem] rounded-xl"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
    >
      <div className="flex flex-col gap-3 text-start">
        <Typography sx={stylesMui.ctaTitle}>
          Download our Application
        </Typography>
        <Typography sx={stylesMui.bodyText}>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Mauris sed nulla integer
        </Typography>
      </div>
      <div className="flex gap-4 mt-6">
        <CtaButton iconSrc={AppIcon} title="App store" />
        <CtaButton iconSrc={PlaystoreIcon} title="Play store" />
      </div>
    </div>
  );
};

export default CtaBox;
