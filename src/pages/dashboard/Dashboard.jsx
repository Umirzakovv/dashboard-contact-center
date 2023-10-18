import Layout from "../../components/layout/Layout";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import Chart from "../../components/chart/Chart";
import io from "socket.io-client";

import "./dashboard.scss";
import { useEffect, useState } from "react";

const socket = io.connect("http://192.168.0.167:2004/");

const Dashboard = () => {
  const [statistics, setStatistics] = useState()
  useEffect(() => {
    setInterval(() => {
      socket.emit("statictik", (receivedData) => {
        console.log(receivedData);
        setStatistics(receivedData);
      });
    }, 5000);
  }, []);

  return (
    <Layout>
      <main>
        <div className="common-statistics__wrapper">
          <CommonStatisticsCard
            title="Поступившие звонки"
            statistics={statistics?.sumAcceptedCallCount}
          />
          
          <CommonStatisticsCard
            title="Предоствленные звонки"
            statistics={statistics?.sumPresentedCallCount}
          />
          <CommonStatisticsCard
            title="Потерянные звонки"
            statistics={statistics?.sumLostCallCount}
          />
          <CommonStatisticsCard
            title="Отбывшихся в очереди"
            statistics={statistics?.sumQueueDispatchedCallCoun}
          />
          
        </div>
        <Chart />
      </main>
    </Layout>
  );
};

export default Dashboard;
