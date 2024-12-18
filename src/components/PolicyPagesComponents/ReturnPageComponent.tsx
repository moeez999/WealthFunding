import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const ReturnPageComponent = () => {
  return (
    <section className="w-full flex flex-col justify-center items-start md:flex-row">
      <div
        className="w-full flex justify-between px-8 md:px-14 xl:px-20 mt-8 md:mt-14 xl:mt-[6.25rem]"
        id="content-nav"
      >
        <div className="w-full" id="content">
          <Typography sx={{ ...stylesMui.policyHeadings, mb: "1rem" }}>
            Refunds
          </Typography>
          <Typography sx={stylesMui.policyText}>
            All sales are final and no refund will be issued. Refunds are only
            applicable after successful completion of the Phase 2 stage
            Evaluation, and first successful withdrawal request from the traders
            funded account. Upon successful completion of Phase 2 on the Alpha
            Pro evaluation the trader will be promoted to a funded account. At
            the time of the trader requesting their first successful withdrawal,
            the fee paid for the evaluation will be refunded in its entirety. At
            the time of placing the first trade on an evaluation account, the
            trader waives their right to request a refund. QUESTIONS If you have
            any questions concerning our return policy, please contact us at:
            support@tuffx.com
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ReturnPageComponent;
