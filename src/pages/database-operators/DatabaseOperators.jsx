import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import Divisions from "./components/divisions/Divisions";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./database-operators.scss";

const DatabaseOperators = () => {
  return (
    <Layout>
      <CommonStatistics />
      <Divisions />
      <Header />
      <Table />
    </Layout>
  );
};

export default DatabaseOperators;
