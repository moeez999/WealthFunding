import { Typography } from "@mui/material";

interface DummyData {
  id: number;
  iconSrc: string;
  label: string;
  earnings: number;
}

interface DummyData1 {
  id: number;
  label: string;
  clicks: number;
}
const StatsTab = () => {
  const dummyData: DummyData[] = [
    {
      id: 1,
      iconSrc: "/Icons/ant-design_dollar-outlined.svg",
      label: "Total Earnings",
      earnings: 0.0,
    },
    {
      id: 2,
      iconSrc: "/Icons/ant-design_dollar-outlined.svg",
      label: "Earned today",
      earnings: 0.0,
    },
    {
      id: 3,
      iconSrc: "/Icons/ant-design_dollar-outlined.svg",
      label: "Earned last month",
      earnings: 0.0,
    },
    {
      id: 4,
      iconSrc: "/Icons/ant-design_dollar-outlined.svg",
      label: "Earned last year",
      earnings: 0.0,
    },
  ];

  const dummyData1: DummyData1[] = [
    {
      id: 1,
      label: "Total clicks",
      clicks: 2,
    },
    {
      id: 2,
      label: "Signups",
      clicks: 0,
    },
    {
      id: 3,
      label: "Purchases ",
      clicks: 0,
    },
  ];
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row mt-4 md:mt-8 md:gap-4 xl:gap-4">
        {dummyData.map((data) => (
          <div
            key={data.id}
            className="w-full sm:w-1/3 lg:w-1/4 p-4 lg:p-8 flex justify-between mt-2 bg-[#212330] rounded-[10px]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <img src={data.iconSrc} width={25} height={25} alt="Icon" />
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  {data.label}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                  pt: 2,
                }}
              >
                ${data.earnings.toFixed(2)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row md:gap-4 xl:gap-4">
        {dummyData1.map((data) => (
          <div
            key={data.id}
            className="w-full sm:w-1/3 lg:w-1/4 p-4 lg:p-8 flex justify-between my-2 bg-[#212330] rounded-[10px]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  {data.label}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 26 },
                  color: "white",
                  pt: 2,
                }}
              >
                {data?.clicks}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsTab;
