import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const CookiePageComponent = () => {
  return (
    <section className="w-full flex flex-col justify-center items-start md:flex-row">
      <div
        className="w-full flex justify-between px-8 md:px-14 xl:px-20 mt-8 md:mt-14 xl:mt-[6.25rem]"
        id="content-nav"
      >
        <div className="w-full" id="content">
          <Typography sx={{ ...stylesMui.policyHeadings, mb: "1rem" }}>
            Cookies Policy
          </Typography>
          <Typography sx={stylesMui.policySubheading}>
            1: Introduction
          </Typography>
          <Typography sx={stylesMui.policyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora, similique laborum laboriosam adipisci itaque ipsam magni
            quia nam reiciendis perspiciatis voluptatem laudantium ad suscipit
            dignissimos sequi at, nisi sint!
          </Typography>
          <Typography sx={stylesMui.policySubheading}>2: Details</Typography>
          <Typography sx={stylesMui.policyText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            tempora, similique laborum laboriosam adipisci itaque ipsam magni
            quia nam reiciendis perspiciatis voluptatem laudantium ad suscipit
            dignissimos sequi at, nisi sint!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            nulla. Libero dignissimos minus, incidunt sunt corporis maiores
            facilis porro possimus sint aperiam laboriosam modi eligendi iure
            magnam reiciendis fuga unde!
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default CookiePageComponent;
