/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { useState } from "react";

const EditDivisionModal = ({
  group,
  setIsEditModalOpen,
  setIsDivisionModalOpen,
}) => {
  console.log(group);
  const [inputValue, setInputValue] = useState(group?.title);
  const [error, setError] = useState();

  const modalRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsEditModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://192.168.104.70:2004/api/v1/division/update/${group?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(inputValue);
      })
      .catch((error) => setError(error));
    setIsEditModalOpen(false);
    setIsDivisionModalOpen(false);
  };

  return (
    <form
      className="add-division__modal"
      ref={modalRef}
      onSubmit={handleFormSubmit}
    >
      <h2 className="add-division__title">Изменить список сотрудников</h2>
      <input
        type="text"
        className="add-division__input"
        placeholder="Напишите..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <SubmitBtn title="Добавить" />
    </form>
  );
};

export default EditDivisionModal;
