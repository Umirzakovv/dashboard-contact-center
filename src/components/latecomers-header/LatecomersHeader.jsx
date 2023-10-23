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
        marginBottom: "3rem"
      }}
    >
      <p></p>
      <SearchBar placeholder="Поиск по И.Ф.О и номер" />
      <Sorting />
    </div>
  );
};

export default LatecomersHeader;
