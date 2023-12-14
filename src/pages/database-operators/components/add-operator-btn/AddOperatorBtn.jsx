import { useState } from "react";
import addImg from "../../../../assets/icons/plus-white.svg";

import "./add-operator-btn.scss";
import AddOperatorModal from "../add-operator-modal/AddOperatorModal";
import Curtain from "../../../../components/curtain/Curtain";

const AddOperatorBtn = () => {
  const [isAddOperatorModalOpen, setisAddOperatorModalOpen] = useState(false);
  const handleBtnClick = () => {
    setisAddOperatorModalOpen(true);
  };

  return (
    <>
      <button className="add-operator__btn" onClick={handleBtnClick}>
        Добавить оператора
        <img src={addImg} alt="add img" />
      </button>
      {isAddOperatorModalOpen ? (
        <AddOperatorModal
          setisAddOperatorModalOpen={setisAddOperatorModalOpen}
        />
      ) : (
        ""
      )}
      {isAddOperatorModalOpen ? <Curtain /> : ""}
    </>
  );
};

export default AddOperatorBtn;
