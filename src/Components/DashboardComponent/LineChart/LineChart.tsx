import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const obj = [
//   {
//     data: 140,
//   },
//   {
//     data: 240,
//   },
//   {
//     data: 340,
//   },
// ];

// let obj2 = obj.map((item) => item.data);


const LineChart = (props: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        align: "center" as const,
        labels: {
          boxWidth: 5,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
      },
      tooltip: {
        backgroundColor: "#ffffff",
        bodyColor: "#000000",
        borderColor: "#dddddd",
        borderWidth: 1,
        titalColor: "#000000",

        titalFontSize: 30,
      },
    },
  };
  const labels = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];



  const data = {
    labels,
    datasets: [
      {
        label: "Investors",
        data: props.data.investors,
        borderColor: "#138707",
      },
      {
        label: "Startups",
        data: props.data.startup,
        borderColor: "#FF9A33",
      },
    ],
  };
  return (
    <div className="linechart">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
