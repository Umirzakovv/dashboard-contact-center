/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import "./add-department-modal.scss";
import { DivisionsContext } from "../../DatabaseOperators";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { fetchSingleDivisionData } from "../../../../consts";

const AddDepartmentModal = ({
  inputValue,
  setInputValue,
  setIsAddDepartmentModalOpen,
}) => {
  const { setWorkers } = useContext(DivisionsContext);
  const { targetDivisionId } = useContext(DivisionsContext);
  const [error, setError] = useState();

  const handleInputChange = (e) => {
    setInputValue(e?.target.value);
  };

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
    fetch("http://192.168.61.169:2004/api/v1/Department/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_department_id: targetDivisionId,
        title: inputValue,
      }),
    })
      .then((res) => {
        if (res?.ok) {
          fetchSingleDivisionData(targetDivisionId, setWorkers);
        }
      })
      .catch((error) => setError(error));
    setIsAddDepartmentModalOpen(false);
  };
  return (
    <form
      className="add-department__modal"
      onSubmit={handleFormSubmit}
      ref={modalRef}
    >
      <h2>Добавить новую группу</h2>
      <input
        type="text"
        placeholder="Напишите..."
        onChange={handleInputChange}
      />
      <SubmitBtn type="submit" title="Добавить" />
    </form>
  );
};

export default AddDepartmentModal;
