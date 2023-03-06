import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import "./DoughnutChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

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
      display: true,
      position: "right" as const,

      labels: {
        boxWidth: 5,
        usePointStyle: true,
      },
    },
  },
};

export const data = {
  labels: ["3300 Investors", "3400 Startups"],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ["#9CEBCA", "#FFD98F"],
    },
  ],
};

export default function DoughnutChartBasic() {
  return (
    <div>
      <Box className="doughnutchartBody">
        <Box
          sx={{
            boxShadow: "5px 10px 5px 5px #ddd",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <Typography className="textBold">Basic Plan</Typography>
          <Doughnut options={options} data={data} />
        </Box>
      </Box>
    </div>
  );
}
