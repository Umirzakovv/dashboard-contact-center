import BackBtn from "../../components/back-btn/BackBtn";
import Layout from "../../components/layout/Layout";
import CommonStatisticsSingleSchedule from "./components/common-statistics/CommonStatistics";
import Header from "./components/header/Header";
import "./single-schedule.scss";

const SingleSchedule = () => {
  return (
    <Layout>
      <BackBtn href={"/schedule"} />
      <CommonStatisticsSingleSchedule />
      <Header />
    </Layout>
  );
};

export default SingleSchedule;
