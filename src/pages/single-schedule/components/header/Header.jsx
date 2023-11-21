import AddGroupBtn from "../add-group-btn/AddGroupBtn";
import ExcelBtn from "../excel-btn/ExcelBtn";
import PrintBtn from "../print-btn/PrintBtn";
import SearchbarSchedule from "../searchbar-schedule/SearchbarSchedule";
import "./Header.scss";

const Header = () => {
  return (
    <div className="single-schedule__header">
      <SearchbarSchedule />

      <div className="btns-wrapper">
        <AddGroupBtn />
        <ExcelBtn />
        <PrintBtn />
      </div>
    </div>
  );
};

export default Header;
