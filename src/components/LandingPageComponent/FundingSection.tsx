import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Typography } from "@mui/material";

import PlayButton from "../../assets/images/landing/playButton.svg";
import VideoThumbnail from "../../assets/images/landing/videoThumbnail.png";

import { stylesMui } from "./styles";

const FundingSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[90%] lg:w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <div className="flex gap-3">
            <Typography sx={stylesMui.pageSubheadings}>
              Get Started Today <br />
              <span className="text-[#00BE64] ml-2">with Wealth Funding</span>
            </Typography>
          </div>
          <Typography sx={stylesMui.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Feugiat nulla suspendisse tortor aene.
          </Typography>
        </div>
      </div>

      <div
        id="video"
        className="mb-7 md:mb-9 w-full relative flex justify-center"
      >
        <img src={VideoThumbnail} alt="video" width="926px" height="658px" />
        <img
          src={PlayButton}
          alt="icon"
          width="100px"
          height="100px"
          className="absolute top-[45%] right-[37%] md:right-[46%] cursor-pointer"
        />
      </div>
    </section>
  );
};

export default FundingSection;
