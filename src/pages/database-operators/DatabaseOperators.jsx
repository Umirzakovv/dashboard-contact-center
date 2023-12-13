import { createContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import Divisions from "./components/divisions/Divisions";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./database-operators.scss";

export const DivisionsContext = createContext();

const DatabaseOperators = () => {
  const [divisions, setDivisions] = useState();
  const [targetDivisionId, setTargetDivisionId] = useState();
  const [workers, setWorkers] = useState();

  return (
    <DivisionsContext.Provider
      value={{
        divisions,
        setDivisions,
        workers,
        setWorkers,
        targetDivisionId,
        setTargetDivisionId,
      }}
    >
      <Layout>
        <CommonStatistics />
        <Divisions />
        <Header />
        <Table />
      </Layout>
    </DivisionsContext.Provider>
  );
};

export default DatabaseOperators;
