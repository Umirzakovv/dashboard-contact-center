/* eslint-disable react/prop-types */
import { useRef } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { useState } from "react";

const EditDivisionModal = ({ setIsEditModalOpen, group }) => {
  console.log(group);
  const modalRef = useRef();
  const [inputValue, setInputValue] = useState(group?.title);
  const [error, setError] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://192.168.126.70:2004/api/v1/division/update/${group?.id}`, {
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
