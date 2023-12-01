/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

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
  return (
    <div className="extended-filter-modal" ref={modalRef}>
      <div className="extended-filter__selects">
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Сбросить" />
        <SubmitBtn title="Фильтрировать" />
      </div>
    </div>
  );
};

export default ExtendedFilterModal;
