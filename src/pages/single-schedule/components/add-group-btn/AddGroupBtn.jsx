import { useEffect, useState } from "react";
import addImg from "../../../../assets/icons/plus.svg";
import "./add-group-btn.scss";
import AddGroupModal from "../add-group-modal/AddGroupModal";
import Curtain from "../../../../components/curtain/Curtain";
const AddGroupBtn = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleClick = () => {
    setisModalOpen(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setisModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Detach the event listener when the modal is closed
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setisModalOpen]);

  return (
    <>
      <button className="shchedule-add__group-btn" onClick={handleClick}>
        <img src={addImg} alt="add img" />
        Добавить Группу
      </button>

      {isModalOpen ? <AddGroupModal setisModalOpen={setisModalOpen} /> : null}
      {isModalOpen ? <Curtain /> : null}
    </>
  );
};

export default AddGroupBtn;
