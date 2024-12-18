import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const DisclaimerPageComponent = () => {
  return (
    <section className="w-full flex flex-col justify-center items-start md:flex-row">
      <div
        className="w-full flex justify-between px-8 md:px-14 xl:px-20 mt-8 md:mt-14 xl:mt-[6.25rem]"
        id="content-nav"
      >
        <div className="w-full" id="content">
          <Typography sx={{ ...stylesMui.policyHeadings, mb: "1rem" }}>
            Website Disclaimer
          </Typography>
          <Typography sx={stylesMui.policyText}>
            The information provided by Wealth Funding LLC (“we,” “us,” or “our”) on
            https://www.tuffx.com (the “Site”) is for general informational
            purposes only. All information on the Site is provided in good
            faith, however we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity,
            reliability, availability, or completeness of any information on the
            Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR
            ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF
            THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR
            USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
            SOLELY AT YOUR OWN RISK. <br />
            <br />
            EXTERNAL LINKS DISCLAIMER The Site may contain (or you may be sent
            through the Site) links to other websites or content belonging to or
            originating from third parties or links to websites and features in
            banners or other advertising. Such external links are not
            investigated, monitored, or checked for accuracy, adequacy,
            validity, reliability, availability, or completeness by us. WE DO
            NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
            ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD- PARTY
            WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN
            ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY
            WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. <br />
            <br />
            PROFESSIONAL DISCLAIMER Wealth Funding LLC does not carry out any regulated
            activities, the only exclusive activities we carry out are
            Proprietary Trading and Professional Training. Consequently, we are
            not required to be authorized by the regulatory authority. Traders
            do not have direct access to company capital, and trade accounts
            with virtual funds, therefore, traders are not required to have a
            money managers license. Wealth Funding is not a broker, and does not accept
            deposits. All information provided on this site is intended solely
            for the study purposes related to trading on financial markets and
            does not serve in any way as a specific investment recommendation,
            business recommendation, investment opportunity analysis or similar
            general recommendation regarding the trading of investment
            instruments. Trading in financial markets is a high-risk activity
            and it is advised not to risk more than one can afford to lose
            Funded Account Disclaimer: Hypothetical or simulated performance
            results have certain limitations. Unlike an actual performance
            record, simulated results do not represent actual trading. Also,
            because the trades have not actually been executed, the results may
            have under-or-over compensated for the impact, if any, of certain
            market factors, such as lack of liquidity. Simulated trading
            programs, in general, are also subject to the fact that they are
            designed with the benefit of hindsight. No representation is being
            made that any account will or is likely to achieve Virtual profit or
            losses similar to those shown. Wealth Funding accounts are not live trading
            accounts, they are fully simulated accounts utilizing real market
            quotes from liquidity providers. The Traders featured are
            representative only and includes selected traders who allow their
            names to be publicly disclosed. Trader performance quoted represents
            past performance in a simulated environment and does not guarantee
            current or future performance. Further, financial instrument trading
            involves substantial risk of loss and is not suitable for every
            investor, trading activities referenced by or undertaken utilizing
            Wealth Funding may not be suitable for all persons. THE USE OR RELIANCE OF
            ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.{" "}
            <br />
            <br />
            TESTIMONIALS DISCLAIMER The Site may contain testimonials by users
            of our products and/or services. These testimonials reflect the
            real-life experiences and opinions of such users. However, the
            experiences are personal to those particular users, and may not
            necessarily be representative of all users of our products and/or
            services. We do not claim, and you should not assume, that all users
            will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
            The testimonials on the Site are submitted in various forms such as
            text, audio and/or video, and are reviewed by us before being
            posted. They appear on the Site verbatim as given by the users,
            except for the correction of grammar or typing errors. Some
            testimonials may have been shortened for the sake of brevity where
            the full testimonial contained extraneous information not relevant
            to the general public. The views and opinions contained in the
            testimonials belong solely to the individual user and do not reflect
            our views and opinions. We are not affiliated with users who provide
            testimonials, and users are not paid or otherwise compensated for
            their testimonials.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerPageComponent;
