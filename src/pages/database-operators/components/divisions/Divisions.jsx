import { useContext, useEffect } from "react";
import { useState } from "react";
import AddDivisionModal from "../add-division-modal/AddDivisionModal";
import Curtain from "../../../../components/curtain/Curtain";
import plusImg from "../../../../assets/icons/plus-white.svg";
import "./divisions.scss";
import Division from "../division/Division";
import { fetchAllDivisions } from "../../../../consts";
import { TargetDivisionContext } from "../../DatabaseOperators";

const Divisions = () => {
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { targetDivision, setTargetDivision } = useContext(
    TargetDivisionContext
  );

  useEffect(() => {
    fetchAllDivisions(setError, setTargetDivision);
  }, []);

  if (error) {
    return <p>{error?.message}</p>;
  }

  const handleAddDivisionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="type-filter__wrapper">
      <div className="type-filter" method="get">
        {targetDivision?.map((group) => {
          return <Division key={group?.id} group={group} id={group?.id} />;
        })}
      </div>
      <button className="division-add__btn" onClick={handleAddDivisionClick}>
        <img src={plusImg} alt="add division button" />
      </button>

      {isModalOpen ? <AddDivisionModal setIsModalOpen={setIsModalOpen} /> : ""}
      {isModalOpen ? <Curtain /> : ""}
    </div>
  );
};

export default Divisions;
