import LatecomersCommonStatistics from "../../components/latecomers-common-statistics/LatecomersCommonStatistics";
import LatecomersHeader from "../../components/latecomers-header/LatecomersHeader";
import LatecomersTable from "../../components/latecomers-table/LatecomersTable";
import Layout from "../../components/layout/Layout";

const LateComers = () => {
  return (
    <Layout>
      <main>
        <LatecomersCommonStatistics />
        <LatecomersHeader />
        <LatecomersTable />
      </main>
    </Layout>
  );
};

export default LateComers;
