import { createContext, useEffect } from "react";
import { useState } from "react";
import AddDivisionModal from "../add-division-modal/AddDivisionModal";
import Curtain from "../../../../components/curtain/Curtain";
import plusImg from "../../../../assets/icons/plus-white.svg";
import "./divisions.scss";
import Division from "../division/Division";
import { fetchAllDivisions } from "../../../../consts";

export const DivisionsDataContext = createContext();

const Divisions = () => {
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupsDivisionData, setGroupsDivisionData] = useState();

  useEffect(() => {
    fetchAllDivisions(setError, setGroupsDivisionData);
  }, []);

  if (error) {
    return <p>{error?.message}</p>;
  }

  const handleAddDivisionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <DivisionsDataContext.Provider
      value={{ groupsDivisionData, setGroupsDivisionData }}
    >
      <div className="type-filter__wrapper">
        <div className="type-filter" method="get">
          {groupsDivisionData?.map((group) => {
            return <Division key={group?.id} group={group} />;
          })}
        </div>
        <button className="division-add__btn" onClick={handleAddDivisionClick}>
          <img src={plusImg} alt="add division button" />
        </button>

        {isModalOpen ? (
          <AddDivisionModal setIsModalOpen={setIsModalOpen} />
        ) : (
          ""
        )}
        {isModalOpen ? <Curtain /> : ""}
      </div>
    </DivisionsDataContext.Provider>
  );
};

export default Divisions;
