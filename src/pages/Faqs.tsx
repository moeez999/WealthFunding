// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import FaqsComponent from "../components/FaqsComponent";

import { stylesMui } from "./styles";

const Faqs = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <div className="flex">
            <Typography sx={{ ...stylesMui.headingPage, color: "#986AEB" }}>
              Frequently
            </Typography>
            &nbsp; &nbsp;
            <Typography sx={stylesMui.headingPage}> Asked Questions</Typography>
          </div>
          <Typography sx={stylesMui.subHeroText}>
            Still you have any questions? Contact our Team via support@tuffx.com
          </Typography>
          <div className="w-full px-4 md:px-20 xl:px-[13.06rem] mt-8 md:mt-14 xl:mt-[4.12rem]">
            <FaqsComponent />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Faqs;
