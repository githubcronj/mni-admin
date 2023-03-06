import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";
import "./BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      backgroundColor: "#ffffff",
      bodyColor: "#000000",
      borderColor: "#dddddd",
      borderWidth: 1,
      titalColor: "#000000",

      titalFontSize: 30,
    },
    legend: {
      align: "end" as const,
      labels: {
        boxWidth: 5,
        usePointStyle: true,
      },
    },
    title: {
      display: true,
    },
    Tooltip: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 15,
            fontColor: "lightgrey",
            maxTicksLimit: 5,
            padding: 25,
          },
        },
      ],
    },
  },
};
const labels = [
  "jan 20",
  "feb 20",
  "mar 20",
  "apr 20",
  "may 20",
  "jun 20",
  "jul 20",
  "aug 20",
  "sep 20",
  "oct 20",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Premium",
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "#138707",
      barThickness: 16,
      barPercentage: 0.5,
      backgroundColor: "#138707",
      borderWidth: 2,
      borderRadius: 5,
      maxBarThickness: 10,
      categoryPercentage: 0.8,
      // barPercentage: 0.5
    },
    {
      label: "Basic",
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: "#FF9A33",
      backgroundColor: "#FF9A33",
      barThickness: 16,
      barPercentage: 0.5,
      borderWidth: 2,
      borderRadius: 5,
      maxBarThickness: 10,
      categoryPercentage: 0.8,
      // barPercentage: 0.5
    },
  ],
};
const BarChart = () => {
  return (
    <Box className="BarchartBody">
      <Bar options={options} data={data} />;
    </Box>
  );
};
export default BarChart;
