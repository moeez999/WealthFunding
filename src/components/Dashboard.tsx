import { Typography, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

interface BillingInfo {
  title: string;
  pic: string;
  subTitle?: string;
  subImg?: string;
  targets: string[];
  price: string;
}

interface Objective {
  title: string;
  description: string;
}

const Objective: Objective[] = [
  {
    title: "Maximum Loss",
    description:
      "This rule can also be called the “account stop-loss” Maximum loss is a fixed figured representing the difference between your initial account balance and current equity which can not fall below the specified value for the plan. For example, If your initial account balance is 10k and you have a max drawdown of 8%, your maximum loss value will remain at $9,200 for the duration of your challenge. If still aren't sure, watch the following video for an in depth breakdown.",
  },
  {
    title: "Maximum Daily Loss",
    description:
      "This rule can also be called “trader’s daily stop-loss”. The rule says that at any moment of the day (EE(S)T – Eastern European Summer Time), the daily equity decrease must not hit the predetermined limit. The counting formula: Current daily loss = balance at the start of the day - current equity.",
  },
  {
    title: "Maximum Loss",
    description:
      "This rule can also be called “account stop-loss”. Maximum Loss is the difference between your highest recorded balance and your current equity. Maximum loss trails your highest recorded balance (closed trades) If still aren't sure, watch the following video for an in depth breakdown.",
  },
  {
    title: "Profit Target",
    description:
      "Depending on chosen trading strategy and phase the minimum profit target to complete the phase or earn commission is set between 5-10% of the initial balance. Profit target means that a trader reaches a profit target specified in the plan of the initial account balance in the sum of closed positions. The trading period is unlimited and the profit target can be met at your leisure without any restrictions. For example: If you trade Challenge with $10,000 capital targeting a minimum of 5%, your profit target is $500. After completing the Verification period (Phase 2), the minimum profit target will be removed. You can trade your Phase 3 account as long as you do not reach the maximum loss limits or violate other rules or objectives.",
  },
  {
    title: "Minimum Trading Days",
    description:
      "To meet this objective, depending on your chosen trading strategy, you must trade for at least one day during the trading period. At least one position must be opened on each of these days. A trading day is considered any day when at least one trade is executed. If a trade is held over multiple days, the day when the trade was executed is considered as the trading day. You can proceed to the next phase without waiting.",
  },
  {
    title: "Trading Period",
    description:
      "All challenges both one and two step have unlimited trading time to complete.",
  },
];

const Dashboard = () => {
  const theme = useTheme();

  const data: BillingInfo[] = [
    {
      title: "Challenge $10k",
      pic: "/Images/silverImg.png",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
        "Premium Features",
        "50 Integrations",
      ],
      price: "$107",
    },
    {
      title: "Challenge $25k",
      subTitle: "Popular",
      subImg: "/Images/fire.png",
      pic: "/Images/goldImg.png",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
        "Premium Features",
        "50 Integrations",
      ],
      price: "$207",
    },
    {
      title: "Challenge $50k",
      pic: "/Images/diamondImg.png",
      targets: [
        "Profit target 12%",
        "Total Allowed Drawdown 8%",
        "Max Daily Loss 4%",
        "Premium Features",
        "50 Integrations",
      ],
      price: "$307",
    },
  ];
  return (
    <div className="flex xl:h-screen  items-center justify-center mx-4 md:mx-6 lg:mx-10">
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[309px] rounded-2xl 
             bg-[#212330] pb-3 md:pb-6 px-3 md:px-6 text-center"
          >
            <div className="rounded-full mt-[-40px] h-20 w-20 bg-[#222228] mx-auto flex items-center justify-center">
              <img className=" " src={item?.pic} alt="" />
            </div>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: item.title === "Challenge $25k" ? "#FF8F1F" : "white",
                fontSize: { xs: 24, md: 30 },
                pt: 3,
              }}
            >
              {item.title}
            </Typography>
            <div className="flex justify-center items-center">
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#FF8F1F",
                  fontSize: { xs: 14, md: 16 },
                }}
              >
                {item.subTitle}
              </Typography>
              <img className="p-1 " src={item?.subImg} alt="" />
            </div>
            <hr className="h-px my-8 bg-[#404047]" />
            {item.targets.map((target, targetIndex) => (
              <div key={targetIndex} className="flex items-center gap-4 mt-5">
                <DoneIcon sx={{ color: "#FF8F1F", fontSize: 14 }} />
                <Typography
                  sx={{
                    color: theme.palette.mode === "light" ? "black" : "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 14,
                  }}
                >
                  {target}
                </Typography>
              </div>
            ))}

            <hr className="h-px my-8  bg-[#404047]" />
            <div className="flex justify-between items-center gap-12 mt-6">
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "white",
                  fontSize: { xs: 24, md: 30 },
                }}
              >
                {item?.price}
              </Typography>{" "}
              <button
                className={`text-[#171717] font-medium text-sm font-[Poppins] cursor-pointer w-full h-10 rounded-[6px] ${
                  item.title === "Challenge $25k"
                    ? "bg-[#FF8F1F]"
                    : "bg-[#BEC0C9]"
                }`}
              >
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
