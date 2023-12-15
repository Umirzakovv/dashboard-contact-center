/* eslint-disable react/prop-types */
import { useContext } from "react";
import TableBody from "../table-body/TableBody";
import "./search-result.scss";
import { DivisionsContext } from "../../DatabaseOperators";

const SearchResult = () => {
  const { lorem, setLorem } = useContext(DivisionsContext);

  return (
    <div className="search-result">
      {lorem?.map((item) => {
        return <TableBody key={item?.id} tableData={item} />;
      })}
    </div>
  );
};

export default SearchResult;
