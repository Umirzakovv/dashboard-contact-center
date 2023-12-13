import { useState } from "react";
import plusImg from "../../../../assets/icons/plus.svg";
import "./add-department-btn.scss";
import AddDepartmentModal from "../add-department-modal/AddDepartmentModal";
import Curtain from "../../../../components/curtain/Curtain";

const AddDepartmentBtn = () => {
  const [isAddDepartmentModalOpen, setIsAddDepartmentModalOpen] =
    useState(false);
  const [inputValue, setInputValue] = useState();

  const handleBtnClick = () => {
    setIsAddDepartmentModalOpen(true);
  };

  return (
    <>
      <button className="add-department-btn" onClick={handleBtnClick}>
        Добавить новую группу
        <img src={plusImg} alt="plus img" />
      </button>

      {isAddDepartmentModalOpen ? (
        <AddDepartmentModal
          inputValue={inputValue}
          setInputValue={setInputValue}
          setIsAddDepartmentModalOpen={setIsAddDepartmentModalOpen}
        />
      ) : (
        ""
      )}
      {isAddDepartmentModalOpen ? <Curtain /> : ""}
    </>
  );
};

export default AddDepartmentBtn;
