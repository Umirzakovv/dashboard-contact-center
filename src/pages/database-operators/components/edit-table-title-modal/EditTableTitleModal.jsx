/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import "./edit-table-title-modal.scss";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { DivisionsContext } from "../../DatabaseOperators";

const EditTableTitleModal = ({ setIsEditTableTitleModalOpen }) => {
  const modalRef = useRef();
  const { targetDivisionId } = useContext(DivisionsContext);

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
    console.log(e.target, "ok");
  };

  return (
    <form
      className="edit-table__title-modal"
      ref={modalRef}
      onSubmit={hadleFormSubmit}
    >
      <h2>Изменить название группы</h2>
      <input type="text" placeholder="Напишите..." />
      <SubmitBtn title="Изменить" />
    </form>
  );
};

export default EditTableTitleModal;
