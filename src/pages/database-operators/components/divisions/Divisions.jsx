import { useEffect } from "react";
import { useState } from "react";
import AddDivisionModal from "../add-division-modal/AddDivisionModal";
import Curtain from "../../../../components/curtain/Curtain";
import plusImg from "../../../../assets/icons/plus-white.svg";
import "./divisions.scss";
import Division from "../division/Division";

const Divisions = () => {
  const [groupsDivisionData, setGroupsDivisionData] = useState();
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.126.70:2004/api/v1/division/all"
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке");
        }

        const result = await response.json();
        setGroupsDivisionData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
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
        {groupsDivisionData?.map((group) => {
          return <Division key={group?.id} group={group} />;
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
