/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./division.scss";
import DivisionModal from "../division-modal/DivisionModal";
import { useEffect } from "react";
import { useRef } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData } from "../../../../consts/index";
const Division = ({ ...props }) => {
  const { setWorkers } = useContext(DivisionsContext);
  const { setTargetDivisionId } = useContext(DivisionsContext);

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

  const handleDivisionClick = () => {
    setTargetDivisionId(props?.group?.id);
    fetchSingleDivisionData(props?.group?.id, setWorkers);
  };

  return (
    <div
      className="type-filter__label-wrapper"
      ref={modalRef}
      onClick={handleDivisionClick}
      onContextMenu={handleContextMenu}
    >
      <label className="type-filter__label">
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
          value={props?.group?.value}
          defaultChecked={props?.group?.defaultChecked}
        />
        <span className="type-filter__styled-radio">{props?.group?.title}</span>
      </label>

      {isDivisionModalOpen ? (
        <DivisionModal
          group={props?.group}
          setIsDivisionModalOpen={setIsDivisionModalOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Division;
