import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import GroupsDivision from "./components/groups-division/GroupsDivision";
import "./database-operators.scss";

const DatabaseOperators = () => {
  return (
    <Layout>
      <CommonStatistics />
      <GroupsDivision />
    </Layout>
  );
};

export default DatabaseOperators;
