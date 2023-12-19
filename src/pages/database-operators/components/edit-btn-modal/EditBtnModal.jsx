/* eslint-disable react/prop-types */

import { useContext, useRef } from "react";
import { useEffect } from "react";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import "./edit-btn-modal.scss";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData } from "../../../../consts";

const EditBtnModal = ({ setIsEditBtnModalOpen }) => {
  const modalRef = useRef();
  const fetchUrl = `http://192.168.61.169:2004/api/v1/worker/update/sdsdsd`;

  const { targetDepartmentId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);
  const { targetDivisionId } = useContext(DivisionsContext);

  const handleConfirmClick = async () => {
    try {
      const response = await fetch(fetchUrl, {
        method: "PATCH",
        body: {},
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        fetchSingleDivisionData(targetDivisionId, setWorkers);
      }
    } catch (error) {
      console.log("Error lorem fetching data:", error);
    } finally {
      setIsEditBtnModalOpen(false);
    }
  };
  const handleCancelClick = () => {
    setIsEditBtnModalOpen(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsEditBtnModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="edit-worker__modal" ref={modalRef}>
      <h2 className="edit-worker__modal-title">Изенить сотрудника</h2>
      <div className="edit-worker__modal-inputs">
        <div className="edit-worker__modal-left"></div>
        <hr />
        <div className="edit-worker__modal-right"></div>
      </div>
      <div className="edit-worker__modal-btns">
        <CancelBtn title="Отменить" onClick={handleCancelClick} />
        <SubmitBtn title="Добавить" onClick={handleConfirmClick} />
      </div>
    </div>
  );
};

export default EditBtnModal;
