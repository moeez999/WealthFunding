import { Button, Typography } from "@mui/material";
import React from "react";

import { stylesMui } from "./styles";

interface CtaButtonProps {
  iconSrc: string;
  title: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ iconSrc, title }) => {
  return (
    <Button sx={stylesMui.footerCtaButton}>
      <img src={iconSrc} alt="icon" width="23px" height="28px" />
      <Typography sx={stylesMui.footerCtaButtonText}>{title}</Typography>
    </Button>
  );
};

export default CtaButton;
