/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./add-service-modal.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddServiceModal = ({
  newInputValue,
  setIsModalOpen,
  setNewInputValue,
}) => {
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    setNewInputValue(e?.target?.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate(newInputValue);
  };

  return (
    <form
      ref={modalRef}
      className="add-service__modal"
      onSubmit={handleFormSubmit}
    >
      <h2 className="add-service__title">Добавить услугу</h2>

      <input
        onChange={handleInputChange}
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
