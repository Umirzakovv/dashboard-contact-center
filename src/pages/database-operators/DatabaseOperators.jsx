import { createContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import CommonStatistics from "./components/common-statistics/CommonStatistics";
import Divisions from "./components/divisions/Divisions";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import "./database-operators.scss";
import SearchResult from "./components/search-result/SearchResult";

export const DivisionsContext = createContext();

const DatabaseOperators = () => {
  const [divisions, setDivisions] = useState();
  const [targetDivisionId, setTargetDivisionId] = useState();
  const [targetDepartmentId, setTargetDepartmentId] = useState();
  const [workers, setWorkers] = useState();
  const [searchResult, setSearchResult] = useState([]);

  return (
    <DivisionsContext.Provider
      value={{
        divisions,
        setDivisions,
        workers,
        setWorkers,
        searchResult,
        setSearchResult,
        targetDivisionId,
        setTargetDivisionId,
        targetDepartmentId,
        setTargetDepartmentId,
      }}
    >
      <Layout>
        <CommonStatistics />
        <Divisions />
        <Header />
        <SearchResult />
        <Table />
      </Layout>
    </DivisionsContext.Provider>
  );
};

export default DatabaseOperators;
