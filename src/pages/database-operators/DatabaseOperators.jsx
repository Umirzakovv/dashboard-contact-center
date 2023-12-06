import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import GroupsDivision from "./components/groups-division/GroupsDivision";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./database-operators.scss";

const DatabaseOperators = () => {
  return (
    <Layout>
      <CommonStatistics />
      <GroupsDivision />
      <Header />
      <Table />
    </Layout>
  );
};

export default DatabaseOperators;
