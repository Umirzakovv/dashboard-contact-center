/* eslint-disable react/prop-types */
import { useState } from "react";
import "./division.scss";
import DivisionModal from "../division-modal/DivisionModal";
import { useEffect } from "react";
import { useRef } from "react";
const Division = ({ group }) => {
  const [isDivisionModalOpen, setIsDivisionModalOpen] = useState(false);
  const modalRef = useRef();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsDivisionModalOpen(!isDivisionModalOpen);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsDivisionModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="type-filter__label-wrapper" ref={modalRef}>
      <label className="type-filter__label" onContextMenu={handleContextMenu}>
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
          value={group?.value}
          defaultChecked={group?.defaultChecked}
        />
        <span className="type-filter__styled-radio">{group?.title}</span>
      </label>

      {isDivisionModalOpen ? <DivisionModal group={group} setIsDivisionModalOpen={setIsDivisionModalOpen}/> : ""}
    </div>
  );
};

export default Division;
