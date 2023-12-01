import SearchBarLayout from "../../../../components/search-bar-layout/SearchBarLayout";
import ExcelBtn from "../../../single-schedule/components/excel-btn/ExcelBtn";
import icon from "../../../../assets/icons/reply-white.svg";
import "./header.scss";
import img from "../../../../assets/icons/search.svg";
import ExtendedFilterBtn from "../extended-filter-btn/ExtendedFilterBtn";

const Header = () => {
  const excelBtnStyle = {
    padding: "1rem",
    borderRadius: "4rem",
    background: "#4DC555",
    color: "#fff",
    fontSize: "1.4rem",
    fontFamily: "Inter",
  };

  return (
    <div className="database-operators__header">
      <ExtendedFilterBtn />
      <SearchBarLayout placeholder="Поиск по Ф.И.О или ID" img={img} />
      <ExcelBtn icon={icon} style={excelBtnStyle} />
    </div>
  );
};

export default Header;
