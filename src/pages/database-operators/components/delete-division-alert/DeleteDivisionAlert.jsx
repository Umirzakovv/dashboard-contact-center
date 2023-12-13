/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import DeleteBtn from "../../../../components/delete-btn/DeleteBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import "./delete-division-alert.scss";
import { fetchAllDivisions } from "../../../../consts";
import { DivisionsContext } from "../../DatabaseOperators";

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
  };

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
        <DeleteBtn title="Нет" />
      </div>
    </div>
  );
};

export default DeleteDivisionAlert;
