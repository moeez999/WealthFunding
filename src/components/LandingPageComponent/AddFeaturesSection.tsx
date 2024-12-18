import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";

import addFeaturesIcon1 from "../../assets/images/landing/addFeaturesIcon1.svg";
import addFeaturesIcon2 from "../../assets/images/landing/addFeaturesIcon2.svg";
import addFeaturesIcon3 from "../../assets/images/landing/addFeaturesIcon3.svg";
import addFeaturesIcon4 from "../../assets/images/landing/addFeaturesIcon4.svg";

import { stylesMui } from "./styles";

const AddFeaturesSection = () => {
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
            <Typography sx={stylesMui.pageSubheadings}>Instant </Typography>
            <Typography
              sx={{
                ...stylesMui.pageSubheadings,
                color: "#FF8F1F",
                fontWeight: 600,
              }}
            >
              Access
            </Typography>
          </div>
          <Typography sx={stylesMui.bodyText}>
            Get your login credentials within seconds of purchasing our program,
            empowering you to start your trading journey with Wealth Funding.
          </Typography>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 flex flex-col md:flex-row w-full flex-wrap justify-between"
        id="fund-cards"
      >
        <div
          className="w-full flex flex-col md:flex-row overflow-hidden"
          id="row1 "
        >
          <div
            className="w-full md:w-[50%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-center gap-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="fund-card1"
          >
            <div className="mb-4 md:mb-[1.88rem]">
              <img
                src={addFeaturesIcon1}
                alt="fund icon"
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 mb-4 md:mb-8 text-center">
              <Typography sx={stylesMui.additionalFeatureHeadings}>
                MT4/MT5
              </Typography>
              <Typography sx={stylesMui.additionalFeaturesText}>
                Trade with Meta Trader 4 and Meta Trader 5, the most widely used
                trading platforms in the world.
              </Typography>
            </div>
          </div>
          <div
            className="w-full md:w-[50%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-center gap-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="fund-card2"
          >
            <div className="mb-4 md:mb-[1.88rem]">
              <img
                src={addFeaturesIcon2}
                alt="fund icon"
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 mb-4 md:mb-8 text-center">
              <Typography sx={stylesMui.additionalFeatureHeadings}>
                Get A Physical Copy
              </Typography>
              <Typography sx={stylesMui.additionalFeaturesText}>
                Now have the ability to not only access a digital copy of your
                certificate. Order a physical certificate straight to your
                doorstep!
              </Typography>
            </div>
          </div>
        </div>

        <div
          className="w-full flex flex-col md:flex-row overflow-hidden"
          id="row2"
        >
          <div
            className="w-full md:w-[50%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-center gap-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="fund-card3"
          >
            <div className="mb-4 md:mb-[1.88rem]">
              <img
                src={addFeaturesIcon3}
                alt="fund icon"
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 mb-4 md:mb-8 text-center">
              <Typography sx={stylesMui.additionalFeatureHeadings}>
                Bi-weekly payments
              </Typography>
              <Typography sx={stylesMui.additionalFeaturesText}>
                Withdraw virtual gains and performance fees from your funded
                account every two weeks.
              </Typography>
            </div>
          </div>
          <div
            className="w-full md:w-[50%] mb-4 md:mb-0 p-[1.88rem] flex flex-col justify-start items-center gap-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            id="fund-card4"
          >
            <div className="mb-4 md:mb-[1.88rem]">
              <img
                src={addFeaturesIcon4}
                alt="fund icon"
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4 mb-4 md:mb-8 text-center">
              <Typography sx={stylesMui.additionalFeatureHeadings}>
                Monthly Competitions at No Additional Cost
              </Typography>
              <Typography sx={stylesMui.additionalFeaturesText}>
                Enroll in our PREMIUM monthly trading competitions. Put your
                skills to the ultimate test and compete against other traders.
                Display your skills, take home thrilling rewards, and reach new
                heights in your trading career.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddFeaturesSection;
