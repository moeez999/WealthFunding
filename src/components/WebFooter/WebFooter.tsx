import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

import WorldMap from "../WorldMap";

import discordIcon from "../../assets/images/DiscordFooter.png";
import igIcon from "../../assets/images/IgFooter.png";
import telegramIcon from "../../assets/images/TelegramFooter.png";
import twitterIcon from "../../assets/images/TwitterFooter.png";
import FullLogo from "../../assets/images/fullLogo.svg";

import CtaBox from "./CtaBox";

import { stylesMui } from "./styles";

export default function WebFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="">
        <WorldMap />
      </section>
      <section
        className="mt-[6.12rem] py-[2.5rem] w-full flex flex-col items-center"
        style={{ background: "rgba(255, 255, 255, 0.02)" }}
      >
        <div className="px-6 lg:px-20 w-full flex flex-col justify-center items-center text-white">
          <div id="header" className="flex justify-between w-full">
            <img
              src={FullLogo}
              alt="tuffx"
              width="82px"
              height="76.12px"
              onClick={scrollToTop}
              className="cursor-pointer "
            />
            <div className="flex gap-2 lg:gap-4 items-center" id="socials">
              <img
                src={igIcon}
                alt="social-icon"
                width="58px"
                height="58px"
                className="hover:cursor-pointer"
              />
              <img
                src={discordIcon}
                alt="social-icon"
                width="58px"
                height="58px"
                className="hover:cursor-pointer"
              />
              <img
                src={twitterIcon}
                alt="social-icon"
                width="58px"
                height="58px"
                className="hover:cursor-pointer"
              />
              <img
                src={telegramIcon}
                alt="social-icon"
                width="58px"
                height="58px"
                className="hover:cursor-pointer"
              />
            </div>
          </div>
          <div
            id="body"
            className="flex flex-col lg:flex-row lg:justify-between w-full my-[3.75rem]"
          >
            <div id="menu">
              <Typography>Menu</Typography>
              <div
                className="flex gap-[9.5rem] mt-6"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
              >
                <div
                  id="links-col-1"
                  className="flex flex-col gap-11 justify-between mt-6"
                >
                  <Link
                    to="/web/"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start"
                    onClick={scrollToTop}
                  >
                    Home
                  </Link>
                  <Link
                    to="/web/legal"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start"
                  >
                    Legal
                  </Link>
                  <Link
                    to="/web/privacy-policy"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div
                  id="links-col-2"
                  className="flex flex-col gap-11 justify-between mt-6"
                >
                  <Link
                    to="/web/disclaimer"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start"
                  >
                    Disclaimer
                  </Link>
                  <Link
                    to="/web/contact"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start mt-2"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/web/return-policy"
                    className="font-[DM Sans] md:text-[14px] xl:text-[18px] font-[400] no-underline text-start mt-2"
                  >
                    Return Policy
                  </Link>
                </div>
              </div>
            </div>
            <div id="cta">
              <CtaBox />
            </div>
          </div>
        </div>

        <div
          className="py-5 w-[95%] flex flex-col md:flex-row justify-between"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
        >
          <div className="mb-4 md:mb-0">
            <Typography sx={stylesMui.copyrightText}>
              Copyright ©{" "}
              <span className="text-[#00BE64] ml-2 cursor-pointer">Wealth Funding</span>
            </Typography>
          </div>
          <Typography sx={stylesMui.copyrightText}>
            <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-[0px]">
              <Link to="/web/cookie-policy">Cookie Policy </Link>{" "}
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/privacy-policy"> Privacy Policy </Link>
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/terms-and-conditions"> Terms & Conditions </Link>
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/disclaimer"> Disclaimer </Link>{" "}
              <div className="hidden md:block"> &nbsp;|&nbsp;</div>
              <Link to="/web/return-policy"> Return Policy</Link>
            </div>
          </Typography>
        </div>
      </section>
    </>
  );
}
