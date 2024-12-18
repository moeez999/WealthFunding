import { Typography } from "@mui/material";
import React from "react";

import { stylesMui } from "./styles";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  content,
}) => {
  return (
    <div
      className="p-6 rounded-xl w-[300px] lg:w-[285px]"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.10)",
      }}
    >
      <div id="header">
        <img src={iconSrc} alt="title" className="w-[4.8125rem]" />
      </div>
      <div id="content" className="mt-6 gap-1">
        <Typography sx={stylesMui.featureCardHeading}>{title}</Typography>
        <Typography sx={stylesMui.featureCardBody}>{content}</Typography>
      </div>
    </div>
  );
};

export default FeatureCard;
