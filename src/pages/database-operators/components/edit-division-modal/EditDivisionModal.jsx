/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { useState } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchAllDivisions } from "../../../../consts";

const EditDivisionModal = ({
  group,
  setIsEditModalOpen,
  setIsDivisionModalOpen,
}) => {
  const [inputValue, setInputValue] = useState(group?.title);
  const [error, setError] = useState();
  const { setDivisions } = useContext(DivisionsContext);

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
    fetch(`http://192.168.61.169:2004/api/v1/division/update/${group?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputValue,
      }),
    })
      .then((response) => {
        if (response?.ok) {
          fetchAllDivisions(setError, setDivisions);
        }
      })

      .catch((error) => setError(error));
    setIsEditModalOpen(false);
    setIsDivisionModalOpen(false);
  };

  if (error) {
    return <p>{error?.message}</p>;
  }

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
        autoFocus={true}
      />
      <SubmitBtn type="submit" title="Добавить" />
    </form>
  );
};

export default EditDivisionModal;
