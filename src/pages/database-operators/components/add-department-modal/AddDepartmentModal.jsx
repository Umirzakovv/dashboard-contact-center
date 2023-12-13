/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import "./add-department-modal.scss";
import { TargetDivisionContext } from "../../DatabaseOperators";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";

const AddDepartmentModal = ({ setIsAddDepartmentModalOpen }) => {
  const { targetDivision, setTargetDivision } = useContext(
    TargetDivisionContext
  );
  const modalRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsAddDepartmentModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      className="add-department__modal"
      onSubmit={handleFormSubmit}
      ref={modalRef}
    >
      <h2>Добавить новую группу</h2>
      <input type="text" placeholder="Напишите..." />
      <SubmitBtn type="submit" title="Добавить"></SubmitBtn>
    </form>
  );
};

export default AddDepartmentModal;
