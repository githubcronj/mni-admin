import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import "./DoughnutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DoughnutChart(props:any) {

   const options = {
    responsive: true,
    plugins: {
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
  
   const data = {
    labels: ["3300 Investors", "3400 Startups"],
    datasets: [
      {
        data: [props.premiumData?.length, props.premiumDataInvestor?.length],
        backgroundColor: ["#FFD98F", "#9CEBCA"],
        borderColor: ["#FFD98F", "#9CEBCA"],
      },
    ],
  };


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
          <Typography className="textBold">Premium Plan</Typography>
          <Doughnut options={options} data={data} />
        </Box>
      </Box>
    </div>
  );
}
