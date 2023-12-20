import { useContext, useEffect } from "react";
import { useState } from "react";
import AddDivisionModal from "../add-division-modal/AddDivisionModal";
import Curtain from "../../../../components/curtain/Curtain";
import plusImg from "../../../../assets/icons/plus-white.svg";
import "./divisions.scss";
import Division from "../division/Division";
import { fetchAllDivisions } from "../../../../consts";
import { DivisionsContext } from "../../DatabaseOperators";

const Divisions = () => {
  const [error, setError] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { divisions, setDivisions } = useContext(DivisionsContext);
  const deleteGroup = {
    id: 1,
    title: "Уволенние соотрудники",
  };

  // const handleDeleteDivisionClick = () => {
  //   console.log("ok");
  //   // fetch("http://192.168.61.169:2004/api/v1/division/deleted")
  //   //   .then((res) => res.json())
  //   //   .then((data) => console.log(data))
  //   //   .catch((error) => console.log(error));
  // };

  useEffect(() => {
    fetchAllDivisions(setError, setDivisions);
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
        {divisions?.map((group) => {
          return <Division key={group?.id} group={group} id={group?.id} />;
        })}
        <Division group={deleteGroup}  />
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
