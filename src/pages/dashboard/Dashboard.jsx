import Layout from "../../components/layout/Layout";
import Chart from "../../components/chart/Chart";
import io from "socket.io-client";

import "./dashboard.scss";
import { useEffect, useState } from "react";
import CommonStatisticsDashboard from "../../components/dashboard-common-statistics/CommonStatisticsDashboard";

const socket = io.connect("http://192.168.42.172:2010/");

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
        <CommonStatisticsDashboard statistics={statistics} />
        <Chart statistics={statistics} />
      </main>
    </Layout>
  );
};

export default Dashboard;
