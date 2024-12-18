// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { LegalPageComponent } from "../components/PolicyPagesComponents";
import { stylesMui } from "./styles";

const Legal = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Legal</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div>
            <LegalPageComponent />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Legal;
