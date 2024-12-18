import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

const StatisticsWebChart: React.FC<ApexChartProps> = () => {
  const chartData = {
    series: [
      {
        name: "Sales",
        data: [
          400000, 3300000, 100000, 900000, 2900000, 1090000, 1000000, 930000,
          120000, 700000, 1900000, 50000,
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
      },

      stroke: {
        width: 5,
        curve: "straight",
      },
      xaxis: {
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
        ],
        tickAmount: 10,
        labels: {
          //@ts-ignore
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "MMM");
          },
          style: {
            colors: "#707B81",
          },
        },
      },
      title: {
        text: "",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          gradientToColors: ["#FF5BEF"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: false, // Hide both vertical and horizontal grid lines
      },
      yaxis: {
        min: 0,
        max: 5000000,
        labels: {
          style: {
            colors: "#707B81", // Set the color of y-axis labels to white
          },
          formatter: function (value) {
            // Convert the label value to desired format (50k, 5m, etc.)
            if (value >= 1000000) {
              return (value / 1000000).toFixed(0) + "m";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(0) + "k";
            } else {
              return value.toFixed(0);
            }
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        //@ts-ignore
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={450}
      />
    </div>
  );
};

export default StatisticsWebChart;
