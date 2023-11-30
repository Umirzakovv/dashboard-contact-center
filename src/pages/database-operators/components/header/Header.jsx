import SearchBarLayout from "../../../../components/search-bar-layout/SearchBarLayout";
import ExcelBtn from "../../../single-schedule/components/excel-btn/ExcelBtn";
import icon from "../../../../assets/icons/reply-white.svg";
import "./header.scss";

const Header = () => {
  const excelStyle = {
    padding: "1rem",
    borderRadius: "4rem",
    background: "#4DC555",
    color: "#fff",
    fontSize: "1.4rem",
  };

  return (
    <div className="database-operators__header">
      <SearchBarLayout />
      <ExcelBtn icon={icon} style={excelStyle} />
    </div>
  );
};

export default Header;
