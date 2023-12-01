import { useEffect, useRef, useState } from "react";
import filterIcon from "../../../../assets/icons/filter.svg";
import "./extended-filter-btn.scss";
import ExtendedFilterModal from "../extended-filter-modal/ExtendedFilterModal";
import Curtain from "../../../../components/curtain/Curtain";
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
        <ExtendedFilterModal setFilterModal={setFilterModal} />
      ) : (
        ""
      )}
    </>
  );
};

export default ExtendedFilterBtn;
