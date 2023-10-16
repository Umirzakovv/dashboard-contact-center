import Layout from "../../components/layout/Layout";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import Chart from "../../components/chart/Chart";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <Layout>
      <main>
        <div className="common-statistics__wrapper">
          <CommonStatisticsCard
            title="Количество операторов"
            statistics="155"
          />
          <CommonStatisticsCard
            title="Количество операторов"
            statistics="155"
          />

          <CommonStatisticsCard
            title="Количество операторов"
            statistics="155"
          />
          <CommonStatisticsCard
            title="Количество операторов"
            statistics="155"
          />
        </div>
        <Chart />
      </main>
    </Layout>
  );
};

export default Dashboard;
