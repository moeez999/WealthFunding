// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { PrivacyPageComponent } from "../components/PolicyPagesComponents";
import { stylesMui } from "./styles";

const Privacy = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Privacy Policy</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div>
            <PrivacyPageComponent />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Privacy;
