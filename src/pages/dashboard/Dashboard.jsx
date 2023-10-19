import Layout from "../../components/layout/Layout";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import Chart from "../../components/chart/Chart";
import io from "socket.io-client";
import acceptedIcon from "../../assets/icons/phone-incoming (1).svg";
import presentedIcon from "../../assets/icons/phone-call.svg";
import lostIcon from "../../assets/icons/phone-missed (1).svg";
import queueDispatchedIcon from "../../assets/icons/phone-off (2).svg";


import "./dashboard.scss";
import { useEffect, useState } from "react";

const socket = io.connect("http://192.168.0.167:2004/");

const Dashboard = () => {
  const [statistics, setStatistics] = useState();

  useEffect(() => {
    socket.emit("statictik", (receivedData) => {
      setStatistics(receivedData);
    });
  }, []);

  return (
    <Layout>
      <main>
        <div className="common-statistics__wrapper">
          <CommonStatisticsCard
            img={acceptedIcon}
            title="Поступившие звонки"
            statistics={statistics?.sumAcceptedCallCount}
          />

          <CommonStatisticsCard
            img={presentedIcon}
            title="Предоствленные звонки"
            statistics={statistics?.sumPresentedCallCount}
          />
          <CommonStatisticsCard
            img={lostIcon}
            title="Потерянные звонки"
            statistics={statistics?.sumLostCallCount}
          />
          <CommonStatisticsCard
            img={queueDispatchedIcon}
            title="Отбывшихся в очереди"
            statistics={statistics?.sumQueueDispatchedCallCoun}
          />
        </div>
        <Chart statistics={statistics} />
      </main>
    </Layout>
  );
};

export default Dashboard;
