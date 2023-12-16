/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import "./edit-table-title-modal.scss";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData } from "../../../../consts";

const EditTableTitleModal = ({
  tableTitle,
  targetDepartmentId,
  setIsEditTableTitleModalOpen,
}) => {
  const modalRef = useRef();
  const [inputValue, setInputValue] = useState(tableTitle);
  const { targetDivisionId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);

  const handleInputChange = (e) => {
    setInputValue(e?.target?.value);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsEditTableTitleModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const hadleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://192.168.61.169:2004/api/v1/Department/update/${targetDepartmentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_department_id: targetDivisionId,
          title: inputValue,
        }),
      }
    )
      .then((res) => {
        if (res?.ok) {
          fetchSingleDivisionData(targetDivisionId, setWorkers);
        }
      })
      .catch((error) => console.log(error));
    setIsEditTableTitleModalOpen(false);
  };

  return (
    <form
      className="edit-table__title-modal"
      ref={modalRef}
      onSubmit={hadleFormSubmit}
    >
      <h2>Изменить название группы</h2>
      <input
        type="text"
        placeholder="Напишите..."
        onChange={handleInputChange}
        value={inputValue}
        autoFocus={true}
      />
      <SubmitBtn title="Изменить" />
    </form>
  );
};

export default EditTableTitleModal;
