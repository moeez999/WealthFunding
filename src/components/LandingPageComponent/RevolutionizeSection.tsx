import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";

import FeatureIcon1 from "../../assets/images/landing/featureIcon1.svg";
import FeatureIcon2 from "../../assets/images/landing/featureIcon2.svg";
import FeatureIcon3 from "../../assets/images/landing/featureIcon3.svg";
import FeatureIcon4 from "../../assets/images/landing/featureIcon4.svg";

import FeatureCard from "./FeatureCard";
import FeaturesMainCard from "./FeaturesMainCard";

import { stylesMui } from "./styles";

const RevolutionizeSection = () => {
  const featureCards = [
    {
      id: "feature-card1",
      icon: FeatureIcon1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      title: "Send & Receive",
    },
    {
      id: "feature-card2",
      icon: FeatureIcon2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      title: "100% Secure Wallet",
    },
    {
      id: "feature-card3",
      icon: FeatureIcon3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      title: "Trading Charts",
    },
    {
      id: "feature-card4",
      icon: FeatureIcon4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      title: "Real Time Trading",
    },
  ];

  const firstColumnCards = featureCards.slice(0, 2);
  const thirdColumnCards = featureCards.slice(2);

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
          <Typography sx={stylesMui.pageSubheadings}>
            Fund Your{" "}
            <span className="text-[#00BE64] ml-2">Portfolio Wealth Funding!</span>
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Feugiat nulla suspendisse tortor aene.
          </Typography>
        </div>
      </div>

      <div
        id="feature-cards"
        className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-9 lg:gap-0"
      >
        <div
          id="1st-col"
          className="flex flex-col justify-center items-center gap-9"
        >
          {firstColumnCards.map(({ id, icon, title, content }) => (
            <FeatureCard
              key={id}
              iconSrc={icon}
              title={title}
              content={content}
            />
          ))}
        </div>
        <div
          id="2nd-col"
          className="mx-10 flex flex-col justify-center items-center"
        >
          <FeaturesMainCard />
        </div>
        <div
          id="3rd-col"
          className="flex flex-col justify-center items-center gap-9"
        >
          {thirdColumnCards.map(({ id, icon, title, content }) => (
            <FeatureCard
              key={id}
              iconSrc={icon}
              title={title}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevolutionizeSection;
