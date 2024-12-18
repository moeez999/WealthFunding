import { Typography, useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const BarChart2 = () => {
  const theme = useTheme();
  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "20%",
        horizontal: false,
        borderRadius: 6,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      type: "category", // Set x-axis type to category
      categories: ["Buy", "Sell"],
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#000000" : "#646464",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#000000" : "#646464",
        },
        formatter: function (value) {
          return value < 0 ? `-$${Math.abs(value)}` : `$${value}`;
        },
      },
    },
    legend: {
      position: "top",
      offsetY: 5,
    },
    grid: {
      show: true, // Hide both vertical and horizontal grid lines
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    {
      name: "Buy",
      data: [1200, 3000],
      color: "#FF0000",
    },
    {
      name: "Sell",
      data: [-1300, -2320],
      color: "#70FF00",
    },
  ];

  return (
    <>
      <div className="bg-[#212330] p-3 lg:p-6 rounded-[10px]">
        <Typography
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
            pb: 2,
          }}
        >
          Trading Volume
        </Typography>
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={series}
          type="bar"
          height={330}
        />
      </div>
    </>
  );
};

export default BarChart2;
