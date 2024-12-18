// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";
import ContactComponent from "../components/ContactComponent";

import { stylesMui } from "./styles";

const Contact = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Contact Us!</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div className="w-[90%] lg:w-[50%] mt-14 md:mt-[5.25rem]">
            <ContactComponent />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Contact;
