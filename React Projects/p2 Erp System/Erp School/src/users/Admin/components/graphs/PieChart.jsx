import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BiBorderRadius } from "react-icons/bi";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Blue", "Yellow"], // Labels for the chart
    datasets: [
      {
        label: "Votes",
        data: [12, 19], // Data for each section
        backgroundColor: [
          "rgba(236,212, 68, 1)",
          //   "rgba(173, 125, 108, 1)",
          "rgba(110,37, 148, 1)",
        ],
        borderColor: [
          "rgba(236,212, 68, 1)",
          //   "rgba(128, 128, 128, 1)",
          "rgba(110,37, 148, 1)",
        ],
        borderWidth: 1,
        labelBorder: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
