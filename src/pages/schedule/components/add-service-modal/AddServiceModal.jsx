/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./add-service-modal.scss";
import { useRef } from "react";

const AddServiceModal = ({ setIsModalOpen }) => {
  const modalRef = useRef(null);

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
    <form ref={modalRef} className="add-service__modal">
      <h2 className="add-service__title">Добавить услугу</h2>

      <input
        type="text"
        className="add-service__input"
        placeholder="Названия услуги"
      />
      <button type="submit" className="add-service__btn">
        Добавить
      </button>
    </form>
  );
};

export default AddServiceModal;
