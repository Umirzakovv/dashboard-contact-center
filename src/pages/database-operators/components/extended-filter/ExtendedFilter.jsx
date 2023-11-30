import { useState } from "react";
import filterIcon from "../../../../assets/icons/filter.svg";
import "./extended-filter.scss";
import ExtendedFilterModal from "../extended-filter-modal/ExtendedFilterModal";
const ExtendedFilter = () => {
  const [filterModal, setFilterModal] = useState(false);

  const handleFilterClick = () => {
    setFilterModal(!filterModal);
  };

  return (
    <>
      <button className="extended-filter" onClick={handleFilterClick}>
        Расширенный фильтр
        <img src={filterIcon} alt="filter icon" />
      </button>
      {filterModal ? <ExtendedFilterModal /> : ""}
    </>
  );
};

export default ExtendedFilter;
