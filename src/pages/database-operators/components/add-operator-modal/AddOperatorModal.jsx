/* eslint-disable react/prop-types */
import { useState } from "react";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import InputWithTitle from "../input-with-title/InputWithTitle";
import "./add-operator-modal.scss";

const AddOperatorModal = ({ setisAddOperatorModalOpen }) => {
  const [userName, setNameRef] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setisAddOperatorModalOpen(false);
  };

  return (
    <form className="add-operator__modal" onSubmit={handleFormSubmit}>
      <h2 className="add-operator__modal-title">Добавить оператора</h2>
      <div className="add-operator__modal-inputs">
        <div className="add-operator__modal-left">
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Bo’lim nomi"
            required={true}
            
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Bo’lim nomi "
          />
        </div>
        <hr />
        <div className="add-operator__modal-right">
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Bo’lim nomi"
          />
        </div>
      </div>
      <div className="add-operator__modal-btns">
        <CancelBtn title="Отменить" onClick={handleCancelClick} />
        <SubmitBtn title="Добавить" />
      </div>
    </form>
  );
};

export default AddOperatorModal;
