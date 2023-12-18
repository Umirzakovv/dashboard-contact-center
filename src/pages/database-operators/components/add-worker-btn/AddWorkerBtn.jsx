/* eslint-disable react/prop-types */
import addImg from "../../../../assets/icons/plus-white.svg";

import "./add-worker-btn.scss";

const AddWorkerBtn = ({ onClick }) => {
  return (
    <>
      <button className="add-operator__btn" onClick={onClick}>
        Добавить оператора
        <img src={addImg} alt="add img" />
      </button>
    </>
  );
};

export default AddWorkerBtn;
