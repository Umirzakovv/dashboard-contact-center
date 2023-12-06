import { useState } from "react";
import filterIcon from "../../../../assets/icons/filter.svg";
import "./extended-filter-btn.scss";
import ExtendedFilterModal from "../extended-filter-modal/ExtendedFilterModal";
const ExtendedFilterBtn = () => {
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
      {filterModal ? (
        <ExtendedFilterModal
          filterModal={filterModal}
          setFilterModal={setFilterModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ExtendedFilterBtn;
