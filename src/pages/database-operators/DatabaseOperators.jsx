import { createContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import Divisions from "./components/divisions/Divisions";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./database-operators.scss";

export const TargetDivisionContext = createContext();

const DatabaseOperators = () => {
  const [targetDivision, setTargetDivision] = useState();
  const [workers, setWorkers] = useState();

  return (
    <TargetDivisionContext.Provider
      value={{ targetDivision, setTargetDivision, workers, setWorkers }}
    >
      <Layout>
        <CommonStatistics />
        <Divisions />
        <Header />
        <Table />
      </Layout>
    </TargetDivisionContext.Provider>
  );
};

export default DatabaseOperators;
