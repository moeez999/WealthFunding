import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const SystemBarChart = () => {
  const theme = useTheme();
  const chartData = {
    profit: {
      name: "Profit",
      data: [10, 15],
    },
    loss: {
      name: "Loss",
      data: [-5, -10],
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          colors: {
            ranges: [
              { from: -100, to: -1, color: "#FF0000" },
              { from: 0, to: 100, color: "#70FF00" },
            ],
          },
          columnWidth: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: (y) => y.toFixed(0) + "%",
          style: {
            colors: theme.palette.mode === "light" ? "black" : "#dedede",
          },
        },
      },
      xaxis: {
        type: "catgory",

        categories: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        labels: {
          rotate: -90,
          style: {
            colors: theme.palette.mode === "light" ? "black" : "#dedede",
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
        series={[chartData.profit, chartData.loss]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default SystemBarChart;
