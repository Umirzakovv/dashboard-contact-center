import { useState } from "react";
import addImg from "../../../../assets/icons/plus-white.svg";

import "./add-operator-btn.scss";
import Curtain from "../../../../components/curtain/Curtain";
import AddWorkerModal from "../add-worker-modal/AddWorkerModal";

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
        <AddWorkerModal
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
