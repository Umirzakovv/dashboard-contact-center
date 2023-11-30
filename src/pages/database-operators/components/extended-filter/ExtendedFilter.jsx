import filterIcon from "../../../../assets/icons/filter.svg";
import "./extended-filter.scss";
const ExtendedFilter = () => {
  return (
    <button className="extended-filter">
      Расширенный фильтр
      <img src={filterIcon} alt="filter icon" />
    </button>
  );
};

export default ExtendedFilter;
