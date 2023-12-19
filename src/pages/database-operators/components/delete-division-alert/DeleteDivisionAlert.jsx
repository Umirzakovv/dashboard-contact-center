/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import "./delete-division-alert.scss";
import { fetchAllDivisions } from "../../../../consts";
import { DivisionsContext } from "../../DatabaseOperators";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";

const DeleteDivisionAlert = ({ group, setIsDeleteModalOpen }) => {
  const modalRef = useRef();
  const [error, setError] = useState();
  const { setDivisions } = useContext(DivisionsContext);
  const handleСonfirmClick = () => {
    fetch(`http://192.168.61.169:2004/api/v1/division/delete/${group?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: group?.id,
      }),
    })
      .then((response) => {
        if (response?.ok) {
          fetchAllDivisions(setError, setDivisions);
        }
      })

      .catch((error) => console.log(error));
    setIsDeleteModalOpen(false);

    if (error) {
      <p>{error?.message}</p>;
    }
  };

  const handleCancelClick = () => {
    setIsDeleteModalOpen(false)
  }

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsDeleteModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="delete-division__alert" ref={modalRef}>
      <h2>
        Вы действительно хотите <br /> удалить этот список?
      </h2>
      <div className="delete-division__alert-btns">
        <SubmitBtn title="Да" onClick={handleСonfirmClick} />
        <CancelBtn title="Нет" onClick={handleCancelClick}/>
      </div>
    </div>
  );
};

export default DeleteDivisionAlert;
