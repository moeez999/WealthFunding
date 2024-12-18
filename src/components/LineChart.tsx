import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

const LineChart: React.FC<ApexChartProps> = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 8, 4, 15, 21, 3, 5, 23, 25, 17, 12, 7, 5],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 100,
        type: "line",
      },
      stroke: {
        width: 5,
        curve: "smooth",
        line: {
          width: 30,
        },
      },
      xaxis: {
        show: false,
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide the x-axis border
        },
        axisTicks: {
          show: false, // Hide the x-axis ticks
        },
      },
      yaxis: {
        show: false,
      },
      title: {
        text: "",
      },
      grid: {
        show: false, // Hide both vertical and horizontal grid lines
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: ["#000000"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 0,
          opacityTo: 1,
          stops: [0, 100, 200],
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        //@ts-ignore
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={120}
        width={200}
      />
    </div>
  );
};

export default LineChart;
