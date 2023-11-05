import ExcelBtn from "../excel-btn/ExcelBtn";
import SearchBar from "../search-bar/SearchBar";
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
      <SearchBar placeholder="Поиск по фамилии или ID РМО" />
      <Sorting />
    </div>
  );
};

export default LatecomersHeader;
