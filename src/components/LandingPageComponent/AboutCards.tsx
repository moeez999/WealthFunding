import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Typography } from "@mui/material";

import AdditionalFeatures from "../../assets/images/landing/additionalFeatures.png";
import AdditionalFeatures2 from "../../assets/images/landing/additionalFeatures2.png";
import FeatureIcon from "../../assets/images/landing/featureIcon.svg";

import { stylesMui } from "./styles";

const AboutCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        id="text-section"
        className="w-[90%] lg:w-[65%] mb-7 md:mb-11 flex flex-col items-center"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            Additional Features For Your <br />
            <span className="text-[#00BE64] ml-2">Funding Journey!</span>
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Feugiat nulla suspendisse tortor aene.
          </Typography>
        </div>
      </div>

      <div
        id="body"
        className="mx-20 w-full flex flex-col justify-center lg:flex-row lg:justify-around items-center"
      >
        <div id="features-image" className="w-[90%] lg:w-[30%]">
          <img
            src={AdditionalFeatures}
            alt="additional-features"
            className="w-full"
          />
        </div>

        <div
          id="features-section"
          className="w-[90%] lg:w-[40%] flex flex-col items-start justify-center"
        >
          <div className="w-full flex flex-col gap-4 items-start mb-6">
            <Typography
              sx={{ ...stylesMui.pageSubheadings, textAlign: "start" }}
            >
              Earn daily rewards on your <br />
              idle tokens
            </Typography>
            <Typography sx={{ ...stylesMui.bodyText, textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Feugiat nulla suspendisse tortor aene.
            </Typography>
          </div>
          <div id="features" className="flex flex-col gap-6 items-start">
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                Lowest fees in market
              </Typography>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                Fast and secure transactions
              </Typography>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                256-bit secure encryption
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div
        id="body2"
        className="mt-24 w-full flex flex-col justify-center lg:flex-row lg:justify-between items-center"
      >
        <div
          id="features-section"
          className="mb-4 lg:mb-0 lg:ml-32 w-[90%] lg:w-[40%] flex flex-col items-start justify-center"
        >
          <div className="w-full flex flex-col gap-4 items-start mb-6">
            <Typography
              sx={{ ...stylesMui.pageSubheadings, textAlign: "start" }}
            >
              Earn daily rewards on your <br />
              idle tokens
            </Typography>
            <Typography sx={{ ...stylesMui.bodyText, textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Feugiat nulla suspendisse tortor aene.
            </Typography>
          </div>
          <div id="features" className="flex flex-col gap-6 items-start">
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                Lowest fees in market
              </Typography>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                Fast and secure transactions
              </Typography>
            </div>
            <div className="flex justify-start items-center gap-4">
              <img src={FeatureIcon} alt="feature" width="40px" height="40px" />
              <Typography sx={stylesMui.featureText}>
                256-bit secure encryption
              </Typography>
            </div>
          </div>
        </div>
        <div id="features-image" className="w-[90%] lg:w-[50%]">
          <img
            src={AdditionalFeatures2}
            alt="additional-features2"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
