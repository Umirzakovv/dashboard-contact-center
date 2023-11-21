import BackBtn from "../../components/back-btn/BackBtn";
import CancelBtn from "../../components/cancel-btn/CancelBtn";
import DeleteBtn from "../../components/delete-btn/DeleteBtn";
import Layout from "../../components/layout/Layout";
import SubmitBtn from "../../components/submit-btn/SubmitBtn";
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
      <SubmitBtn title="Изменить" />
      <DeleteBtn title="Удалить" />
      <CancelBtn title="Отменить" />
    </Layout>
  );
};

export default SingleSchedule;
