import ExcelBtn from "../excel-btn/ExcelBtn";
import SearchBarLatecomers from "../search-bar-latecomers/SearchBarLatecomers";
import Sorting from "../sorting/Sorting";

const LatecomersHeader = () => {
  return (
    <div
      className="latecomers-header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "3rem",
      }}
    >
      <ExcelBtn />
      <SearchBarLatecomers />
      <Sorting />
    </div>
  );
};

export default LatecomersHeader;
