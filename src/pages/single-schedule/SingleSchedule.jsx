import BackBtn from "../../components/back-btn/BackBtn";
import Layout from "../../components/layout/Layout";
import CommonStatisticsSingleSchedule from "./components/common-statistics-single-schedule/CommonStatisticsSingleSchedule";
import "./single-schedule.scss";

const SingleSchedule = () => {
  return (
    <Layout>
      <BackBtn href={"/schedule"} />
      <CommonStatisticsSingleSchedule />
    </Layout>
  );
};

export default SingleSchedule;
