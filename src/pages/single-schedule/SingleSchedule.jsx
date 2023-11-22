import BackBtn from "../../components/back-btn/BackBtn";
import Layout from "../../components/layout/Layout";
import CommonStatisticsSingleSchedule from "./components/common-statistics/CommonStatistics";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./single-schedule.scss";

const SingleSchedule = () => {
  return (
    <Layout>
      <BackBtn href={"/schedule"} />
      <CommonStatisticsSingleSchedule />
      <Header />
      <Table />
    </Layout>
  );
};

export default SingleSchedule;
