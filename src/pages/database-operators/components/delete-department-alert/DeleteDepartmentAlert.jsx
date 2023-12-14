/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import DeleteBtn from "../../../../components/delete-btn/DeleteBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import "./delete-department-alert.scss";
import { fetchSingleDivisionData } from "../../../../consts";
import { DivisionsContext } from "../../DatabaseOperators";

const DeleteDepartmentAlert = ({
  targetDepartmentId,
  setIsDeleteConfirmModalOpen,
}) => {
  const modalRef = useRef();
  const { targetDivisionId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);

  const handleСonfirmClick = () => {
    fetch(
      `http://192.168.61.169:2004/api/v1/Department/delete/${targetDepartmentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response?.ok) {
          fetchSingleDivisionData(targetDivisionId, setWorkers);
        }
      })

      .catch((error) => console.log(error));
    setIsDeleteConfirmModalOpen(false);
  };

  const handleCancelClick = () => {
    setIsDeleteConfirmModalOpen(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsDeleteConfirmModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="delete-department__alert" ref={modalRef}>
      <h2>
        Вы действительно хотите <br /> удалить эту группу?
      </h2>
      <div className="delete-department__alert-btns">
        <SubmitBtn title="Да" onClick={handleСonfirmClick} />
        <DeleteBtn title="Нет" onClick={handleCancelClick} />
      </div>
    </div>
  );
};

export default DeleteDepartmentAlert;
