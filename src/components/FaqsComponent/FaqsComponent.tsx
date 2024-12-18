import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const faqData = [
  {
    question: "Which broker do we use?",
    answer:
      "We use Blueberry Markets, also have 3rd party Brokerages, on stand by if in the event they experience any sort of technical issue or liquidity problem.\n Blueberry offering our traders an assessment environment which replicates:\n\n- Extensive Institutional Trading Experience\n\n- Prime or Prime Liquidity\n\n- Ultra-low latency\n\n- Targeted execution time of less than 30ms\n\n- Raw spreads starting from 0.1\n\n- Commission-free trading\n\n- Offerings in FX, Indices, and Commodities",
  },
  {
    question: "Are we a broker?",
    answer:
      "We are not a broker, Our business engages only in proprietary trading.\n\n We don't take deposits from traders who want to transact with their own funds.\n\n Customers just need to pay for the evaluation of their trading strategy; we do not take deposits from traders in order to transact with their own funds.",
  },
  {
    question: "Which regulations apply to qualified traders?",
    answer:
      "Only qualified traders hired as external analysts by our prop business are eligible for performance fees.\n\nReceiving performance fees by bank wire transfer Our clients can now benefit from a favorable 0.3% exchange rate fee when receiving performance fees in their home currencies. Please use your dashboard profile to submit requests for performance fee payouts.",
  },
  {
    question: "What options are there for paying performance fees?",
    answer:
      "Only qualified traders hired as external analysts by our prop business are eligible for performance fees.\n\nReceiving performance fees by bank wire transfer Our clients can now benefit from a favorable 0.3% exchange rate fee when receiving performance fees in their home currencies. Please use your dashboard profile to submit requests for performance fee payouts.",
  },
  {
    question: "Are you trading real funds?",
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    question:
      "What Tax Procedures Should I Follow When Using Wealth Funding for Trading?",
    answer:
      "Wealth Funding doesn't offer tax advice. It is best to consult a financial counselor or accountant for tax-related questions as they can offer advice and guarantee that the tax laws in your area are followed.",
  },
  {
    question: "Premium Monthly Trading competitions?",
    answer:
      "Rules for a Free Monthly Trading Competition\n\nRules and limits for the free monthly trading competition\n\nThe purpose of our monthly free trading competitions is to enable traders to \n\n1) Take part in a free competition with other traders to win free accounts and discounts.\n\n2) Before moving on to a fundraising evaluation, try our platform. \n\nIn order to maintain fairness, we have put in place the following guidelines. Please note that these limitations ONLY apply to the free monthly trading competition and do not apply to Alpha Pro financing plans. \n\nRule 1: Don't deploy EAs Rule \n\n2: Maximum lot size for each trade 10 LOTS FX / XAUUSD / XAGUSD Maximum 30 lots for Oil, CFDs, and Indices \n\nRule 3: There can be no more than five active trades in a row at any given moment. \n\nRule 4: 4% Maximum Daily Drawdown \n\nRule 5: 8% maximum overall drawdown \n\nRule 6: Do not exploit implausible fills in the demonstration setting. \n\nRule 7: Free admission (one per Client)\n\nRule 8: Maximum profit in dollars",
  },
];

const FaqsComponent = () => {
  return (
    <>
      {faqData.map((faq, index) => (
        <section className="flex flex-col py-[3.12rem] px-[3.12rem] w-full bg-white bg-opacity-5 rounded-[0.875rem] mb-6">
          <div
            className="flex flex-col items-start w-full"
            key={index}
            id={`faq-unit-${index}`}
          >
            <Typography sx={stylesMui.faqQuestion}>{faq.question}</Typography>
            <hr className="my-6 md:my-[1.88rem] w-full h-[0.0625rem]" />
            <Typography sx={{ ...stylesMui.faqAnswer, whiteSpace: "pre-line" }}>
              {faq.answer}
            </Typography>
          </div>
        </section>
      ))}
    </>
  );
};

export default FaqsComponent;
