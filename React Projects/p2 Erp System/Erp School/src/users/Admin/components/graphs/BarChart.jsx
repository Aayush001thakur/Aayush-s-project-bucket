import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April"], // X-axis labels
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 99], // Y-axis data
        backgroundColor: [
          "rgba(77, 68, 191, 1)",
          "rgba(39, 39, 56, 1)",
          "rgba(251, 125, 91, 1)",
          "rgba(250 , 204 ,21, 1)",
        ],
        borderColor: [
          "rgba(77, 68, 191, 1)",
          "rgba(39, 39, 56, 1)",
          "rgba(251, 125, 91, 1)",
          "rgba(250 , 204 ,21, 1)",
        ],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue Data",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
