/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import "./add-division-modal.scss";
import { useRef } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { useState } from "react";
import { fetchAllDivisions } from "../../../../consts";
import { DivisionsDataContext } from "../divisions/Divisions";

const AddDivisionModal = ({ setIsModalOpen }) => {
  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState();
  const { setGroupsDivisionData } = useContext(DivisionsDataContext);

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

  const handleFormChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://192.168.104.70:2004/api/v1/division/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputValue,
      }),
    })
      .then((response) => {
        if (response?.ok) {
          fetchAllDivisions(setError, setGroupsDivisionData);
        }
      })

      .catch((error) => setError(error));
    setIsModalOpen(false);
  };

  return (
    <form
      className="add-division__modal"
      ref={modalRef}
      onSubmit={handleFormSubmit}
    >
      <h2 className="add-division__title">Добавить новый список сотрудников</h2>
      <input
        type="text"
        className="add-division__input"
        placeholder="Напишите..."
        onChange={handleFormChange}
      />
      <SubmitBtn title="Добавить" setInputValue={setInputValue} />
    </form>
  );
};

export default AddDivisionModal;
