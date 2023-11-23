/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./add-group-modal.scss";
import { useEffect } from "react";
import TitleInput from "../../../../components/title-input/TitleInput";
import SupervisorInput from "../../../../components/supervisor-input/SupervisorInput";
import OperatorInput from "../../../../components/operator-input/OperatorInput";

const AddGroupModal = ({ setisModalOpen }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setisModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <form className="add-group__modal" ref={modalRef}>
      <h2 className="add-group__modal-title">Добавить новую группу</h2>
      <TitleInput placeholder="Названия группы" />
      <SupervisorInput placeholder="Имя супервайзера" />
      <OperatorInput placeholder="Ф.И.О"/>
    </form>
  );
};

export default AddGroupModal;
