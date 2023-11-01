/* eslint-disable react/prop-types */
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

const Chart = ({ statistics }) => {
  const data = {
    labels: statistics?.arrdate,
    datasets: [
      {
        label: "Поступившие звонки",
        data: statistics?.arrAcceptedCallCount,
        borderColor: "#336CFB",
        backgroundColor: "#336CFB",
        tension: 0.4,
      },
      {
        label: "Предоствленные звонки",
        data: statistics?.arrPresentedCallCount,
        borderColor: "green",
        backgroundColor: "green",
        tension: 0.4,
      },
      {
        label: "Потерянные звонки",
        data: statistics?.arrLostCallCount,
        borderColor: "red ",
        backgroundColor: "red",
        tension: 0.4,
      },
      {
        label: "Отбывшихся в очереди",
        data: statistics?.arrQueueDispatchedCallCoun,
        borderColor: "#FAC032",
        backgroundColor: "#FAC032",
        tension: 0.4,
      },
    ],
  };

  const options = {
    height: 400,
    backgroundColor: "#fff",
    maintainAspectRatio: false,
  };
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
