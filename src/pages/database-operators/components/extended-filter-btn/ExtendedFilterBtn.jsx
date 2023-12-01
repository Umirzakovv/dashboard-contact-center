import { useEffect, useRef, useState } from "react";
import filterIcon from "../../../../assets/icons/filter.svg";
import "./extended-filter-btn.scss";
import ExtendedFilterModal from "../extended-filter-modal/ExtendedFilterModal";
import Curtain from "../../../../components/curtain/Curtain";
const ExtendedFilterBtn = () => {
  const [filterModal, setFilterModal] = useState(false);
  const modalRef = useRef();
  const handleFilterClick = () => {
    setFilterModal(true);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setFilterModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
      {filterModal ? <Curtain /> : ""}
    </>
  );
};

export default ExtendedFilterBtn;
