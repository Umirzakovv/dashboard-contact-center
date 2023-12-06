/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./add-division-modal.scss";
import { useRef } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";

const AddDivisionModal = ({ setIsModalOpen }) => {
  const modalRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <form className="add-division__modal" ref={modalRef}>
      <h2 className="add-division__title">Добавить новый список сотрудников</h2>
      <input
        type="text"
        className="add-division__input"
        placeholder="Напишите..."
      />
      <SubmitBtn title="Добавить" />
    </form>
  );
};

export default AddDivisionModal;
