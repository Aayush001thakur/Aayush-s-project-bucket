import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the doughnut chart
  const data = {
    labels: ["Jan-Apr", "May-Aug", "Sep-Dec"], // Labels for the chart
    datasets: [
      {
        label: "Lakh",
        data: [12, 19, 6], // Data for each label
        backgroundColor: [
          "rgba(164, 185, 219)", // Colors for each section
          "rgba(95, 207, 195)",
          "rgba(245, 42, 153)",
        ],
        borderColor: [
          "rgba(164, 185, 219)",
          "rgba(95, 207, 195)",
          "rgba(245, 42, 153)",
        ],
        borderWidth: 2, // Border width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      title: {
        display: true,
        text: "Overall Revenue", // Chart title
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
