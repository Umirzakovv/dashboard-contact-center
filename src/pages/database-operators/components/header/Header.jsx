import SearchBarLayout from "../../../../components/search-bar-layout/SearchBarLayout";
import ExcelBtn from "../../../single-schedule/components/excel-btn/ExcelBtn";
import icon from "../../../../assets/icons/reply-white.svg";
import "./header.scss";
import img from "../../../../assets/icons/search.svg";
import ExtendedFilterBtn from "../extended-filter-btn/ExtendedFilterBtn";
import AddDepartmentBtn from "../add-department-btn/AddDepartmentBtn";
import { useContext, useState } from "react";
import { DivisionsContext } from "../../DatabaseOperators";

const excelBtnStyle = {
  padding: "1rem",
  borderRadius: "4rem",
  background: "#4DC555",
  color: "#fff",
  fontSize: "1.4rem",
  fontFamily: "Inter",
};
const Header = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { targetDivisionId } = useContext(DivisionsContext);
  const { setSearchResult } = useContext(DivisionsContext);
  const handleInputChange = (e) => {
    setSearchInputValue(e?.target?.value);
  };

  const handleSearchBarSubmit = (e) => {
    e.preventDefault();

    if (!searchInputValue.length) {
      setSearchResult([]);
    } else {
      fetch(
        `http://192.168.61.169:2004/api/v1/division/getfilter/${targetDivisionId}?name=${searchInputValue}&operator_number=null`
      )
        .then((res) => res.json())
        .then((data) => setSearchResult(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="database-operators__header">
      <ExtendedFilterBtn />
      <SearchBarLayout
        placeholder="Поиск по Ф.И.О или ID РМО"
        img={img}
        onChange={handleInputChange}
        onSubmit={handleSearchBarSubmit}
      />
      <AddDepartmentBtn />
      <ExcelBtn icon={icon} style={excelBtnStyle} />
    </div>
  );
};

export default Header;
