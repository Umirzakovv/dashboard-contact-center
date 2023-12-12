/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./division.scss";
import DivisionModal from "../division-modal/DivisionModal";
import { useEffect } from "react";
import { useRef } from "react";
import { TargetDivisionContext } from "../../DatabaseOperators";
const Division = ({ group }) => {
  const [isDivisionModalOpen, setIsDivisionModalOpen] = useState(false);
  const { targetDivision, setTargetDivision } = useContext(
    TargetDivisionContext
  );
  const { wrokers, setWorkers } = useContext(TargetDivisionContext);
  const [targetId, setTargetId] = useState();

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

  const handleTargetDivisionClick = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.61.169:2004/api/v1/division/one/${group?.id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setWorkers(result);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  };

  return (
    <div
      className="type-filter__label-wrapper"
      ref={modalRef}
      onClick={handleTargetDivisionClick}
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
