import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography, useTheme } from "@mui/material";

import CtaRightIcon from "../../assets/icons/CtaRightIcon";
import DiscordIcon from "../../assets/images/landing/discordJoinSocialsButton.png";
import TelegramIcon from "../../assets/images/landing/telegramJoinSocialsButton.png";
import InstagramIcon from "../../assets/images/landing/instagramJoinSocialsButton.png";
import XIcon from "../../assets/images/landing/twitterJoinSocialsButton.png";
import HeroImage from "../../assets/images/landing/heroImage.png";
import FeaturedCompany1 from "../../assets/images/landing/featuredCompany1.svg";
import FeaturedCompany2 from "../../assets/images/landing/featuredCompany2.svg";
import FeaturedCompany3 from "../../assets/images/landing/featuredCompany3.svg";
import FeaturedCompany4 from "../../assets/images/landing/featuredCompany4.svg";
import FeaturedCompany5 from "../../assets/images/landing/featuredCompany5.svg";

import { stylesMui } from "./styles";

const HeroSection = () => {
  const theme = useTheme();

  const getBorderStyles = (theme) => ({
    border: `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
  });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col items-center justify-center">
      <div
        id="top"
        className="w-full flex flex-col lg:flex-row justify-between"
      >
        <div
          id="text-section"
          className="lg:mx-20 w-full lg:w-1/2 flex flex-col items-center justify-center"
        >
          <div className="w-full flex flex-col gap-4 items-center lg:items-start mb-[1.63rem]">
            <Typography sx={stylesMui.pageTitle}>Revolutionize Your</Typography>
            <Typography sx={{ ...stylesMui.pageTitle, color: "#00BE64" }}>
              Trading Game
            </Typography>
            <Typography sx={stylesMui.subHeroText}>
              <s style={{ textDecoration: "line-through" }}>No time limit</s> |
              $0 commission trading
            </Typography>
            <Typography sx={stylesMui.subHeroText}>
              Institutional execution environment advanced <br />
              dashboard & analytics
            </Typography>
          </div>
          <div className="w-[60%] mb-4 lg-mb-0 lg:w-full flex flex-col md:flex-row justify-center lg:justify-start gap-6">
            <Button sx={stylesMui.ctaButton}>
              <Typography sx={stylesMui.ctaButtonText}>Get Funded</Typography>
              <CtaRightIcon />
            </Button>
            <Button
              sx={{ ...stylesMui.socialsButton, ...getBorderStyles(theme) }}
            >
              <div className="flex gap-2">
                <Typography sx={{ lineHeight: { xs: "1rem", md: "1.8rem" } }}>
                  Join our Socials
                </Typography>
                <img src={DiscordIcon} width="24px" height="24px" />
                <img src={TelegramIcon} width="24px" height="24px" />
                <img src={InstagramIcon} width="24px" height="24px" />
                <img src={XIcon} width="24px" height="24px" />
              </div>
            </Button>
          </div>
        </div>

        <div
          className="w-full lg:w-1/2"
          id="hero-image"
          data-aos="fade-down"
          data-aos-duration="4000"
        >
          <div className="w-full">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>

      <div id="featured-on" className="w-full mt-[4.8rem]">
        <Typography sx={stylesMui.pageSubheadings}>
          <span className="text-[#00BE64] ml-2">Wealth Funding</span> has been featured
          on
        </Typography>
        <div
          // className="mt-11 flex justify-between mb-12 md:mb-[5.48rem] px-20"
          className="mt-11 flex flex-wrap justify-between mb-12 md:mb-[5.48rem] px-20 gap-4 lg:gap-0"
          id="companies"
        >
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={FeaturedCompany1}
              alt="featured-company"
              width="180px"
              height="29px"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={FeaturedCompany2}
              alt="featured-company"
              width="180px"
              height="29px"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={FeaturedCompany3}
              alt="featured-company"
              width="180px"
              height="29px"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={FeaturedCompany4}
              alt="featured-company"
              width="180px"
              height="29px"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={FeaturedCompany5}
              alt="featured-company"
              width="180px"
              height="29px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
