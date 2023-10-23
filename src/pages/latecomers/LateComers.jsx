import LatecomersCommonStatistics from "../../components/latecomers-common-statistics/LatecomersCommonStatistics";
import LatecomersTable from "../../components/latecomers-table/LatecomersTable";
import Layout from "../../components/layout/Layout";

const LateComers = () => {
  return (
    <Layout>
      <main>
        <LatecomersCommonStatistics />
        <LatecomersTable />
      </main>
    </Layout>
  );
};

export default LateComers;
