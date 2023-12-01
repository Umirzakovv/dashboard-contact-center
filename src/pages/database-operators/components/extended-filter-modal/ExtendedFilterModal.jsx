/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

import { extendedFilterSelections } from "../../../../mock/mock-data";

const ExtendedFilterModal = ({ setFilterModal }) => {
  const modalRef = useRef();

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

  const handleClick = () => {
    console.log(extendedFilterSelections);
  };
  return (
    <div className="extended-filter-modal" ref={modalRef}>
      <div className="extended-filter__selects">
        {extendedFilterSelections?.map((item) => {
          return <Select key={item?.id} item={item}/>;
        })}
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Сбросить" onClick={handleClick} />
        <SubmitBtn title="Фильтрировать" />
      </div>
    </div>
  );
};

export default ExtendedFilterModal;
