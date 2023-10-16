import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Количество операторов",
      data: [30, 33, 66, 78, 45, 59, 12, 15],
      borderColor: "#336CFB",
      tension: 0.4,
    },
    {
      label: "Количество звонков",
      data: [12, 45, 58, 45, 89, 48, 75],
      borderColor: "#FAC032",
      tension: 0.4,
    },
    {
      label: "Предоставленые вызовы",
      data: [45, 78, 120, 45, 78, 15, 18],
      borderColor: "red ",
      tension: 0.4,
    },
    {
      label: "Поступившие вызовы",
      data: [25, 68, 47, 14, 25, 58, 75],
      borderColor: "green",
      tension: 0.4,
    },
  ],
};

const options = {
  height: 400,
  backgroundColor: "#fff",
  maintainAspectRatio: false,
};

const Chart = () => {
  return (
    <div style={{ height: "400px" }}>
      <Line
        data={data}
        options={options}
        style={{ backgroundColor: "#fff" }}
      ></Line>
    </div>
  );
};

export default Chart;
