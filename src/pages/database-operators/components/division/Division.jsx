/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./division.scss";
import DivisionModal from "../division-modal/DivisionModal";
import { useEffect } from "react";
import { useRef } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import {
  fetchSingleDivisionData,
} from "../../../../consts/index";
const Division = ({ group }) => {
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
    setTargetDivisionId(group?.id);
    fetchSingleDivisionData(group?.id, setWorkers);
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
          value={group?.value}
          defaultChecked={group?.defaultChecked}
        />
        <span className="type-filter__styled-radio">{group?.title}</span>
      </label>

      {isDivisionModalOpen ? (
        <DivisionModal
          group={group}
          setIsDivisionModalOpen={setIsDivisionModalOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Division;
