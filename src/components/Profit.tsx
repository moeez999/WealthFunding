import MainTitleComponent from "./MainTitleComponent";
import { Typography, useTheme } from "@mui/material";
interface profitDataInterface {
  id: number;
  title: string;
  text: string;
  price: string;
  paragraph: string;
  buttonText: string;
}
const Profit = () => {
  const theme = useTheme();
  const profitData: profitDataInterface[] = [
    {
      id: 1,
      title: "Profit",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Profile",
    },
    {
      id: 2,
      title: "Next Withdrawal",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Withdrawal",
    },
    {
      id: 3,
      title: "Withdrawal State",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Withdrawal",
    },
    {
      id: 4,
      title: "Share",
      text: "Available for Withdrawal",
      price: "$0.00",
      paragraph: "$100 minimum required withdrawal",
      buttonText: "Request Share",
    },
  ];
  return (
    <div className="mx-4 md:mx-6 lg:mx-10 min-h-[100vh] space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-y-4 mb-8">
        <MainTitleComponent Image="/Icons/status-up.svg" title="Profits" />
      </div>

      <div className="p-3 md:p-6 mt-8 bg-[#212330] rounded-[10px]">
        <Typography
          sx={{
            color: "white",
            fontSize: 26,
          }}
        >
          Payouts and Certificates
        </Typography>

        <div className="flex justify-between flex-wrap pt-4 gap-y-3 gap-x-3 md:gap-x-[0px] ">
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            DATE (UTC)
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            PROFIT
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            PROFIT SPLIT
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            PAID
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            STATUS
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            CERTIFICATE
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 16,
            }}
          >
            INVOICE
          </Typography>
        </div>
        <div className="flex justify-between items-center mt-9">
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            No data available in table
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: theme.palette.mode === "light" ? "black" : "white",
            }}
          >
            1
          </Typography>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-6">
        {profitData?.map((item) => (
          <div
            key={item.id}
            className="bg-[#212330] rounded-[10px] w-full md:w-1/3 xl:w-[22%] p-2 md:p-4"
          >
            <Typography
              sx={{
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 18, md: 22 },
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "white",
                mt: 2,
              }}
            >
              {" "}
              {item.text}
            </Typography>

            <Typography
              sx={{
                color: "#00BE64",
                mt: 2,
              }}
            >
              {item.price}
            </Typography>

            <button className="font-[Montserrat] text-xs font-medium text-black w-full h-10 bg-[#00BE64] mt-5 rounded-md">
              {item?.buttonText}
            </button>
            <Typography
              sx={{
                fontSize: 10,
                color: "white",
                fontWeight: 400,
                mt: 2,
              }}
            >
              {item.paragraph}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profit;
