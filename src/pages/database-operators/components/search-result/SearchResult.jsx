/* eslint-disable react/prop-types */
import { useContext } from "react";
import TableBody from "../table-body/TableBody";
import "./search-result.scss";
import { DivisionsContext } from "../../DatabaseOperators";
import TableHead from "../table-head/TableHead";

const SearchResult = () => {
  const { searchResult } = useContext(DivisionsContext);
  // console.log(searchResult);
  return searchResult.length <= 0 ? null : (
    <div className="search-result">
      <h2>Результат поиска</h2>
      <table className="search-result__response">
        <TableHead />
        {searchResult?.map((item) => {
          return <TableBody key={item?.id} tableData={item} />;
        })}
      </table>
    </div>
  );
};

export default SearchResult;
