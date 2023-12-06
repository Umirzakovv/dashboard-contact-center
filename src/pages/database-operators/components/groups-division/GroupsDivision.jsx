import { useEffect } from "react";
import "./groups-division.scss";
import { useState } from "react";

import plusImg from "../../../../assets/icons/plus-white.svg";
import AddDivisionModal from "../add-division-modal/AddDivisionModal";
import Curtain from "../../../../components/curtain/Curtain";

const GroupsDivision = () => {
  const [groupsDivisionData, setGroupsDivisionData] = useState();
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.104.70:2004/api/v1/division/all"
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

  const handleClick = (e) => {
    console.log(e.target?.value);
  };

  const handleAddDivisionClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="type-filter__wrapper">
      <div className="type-filter" method="get">
        {groupsDivisionData?.map((group) => {
          return (
            <label
              key={group?.id}
              className="type-filter__label"
              onClick={handleClick}
            >
              <input
                className="visually-hidden type-filter__radio"
                type="radio"
                name="type"
                value={group?.value}
                defaultChecked={group?.defaultChecked}
              />
              <span className="type-filter__styled-radio">{group?.title}</span>
            </label>
          );
        })}
      </div>
      <button className="division-add__btn" onClick={handleAddDivisionClick}>
        <img src={plusImg} alt="" />
      </button>

      {isModalOpen ? <AddDivisionModal setIsModalOpen={setIsModalOpen} /> : ""}
      {isModalOpen ? <Curtain /> : ""}
    </div>
  );
};

export default GroupsDivision;
