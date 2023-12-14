import addImg from "../../../../assets/icons/plus-white.svg";

import "./add-operator-btn.scss";

const AddOperatorBtn = () => {
  return (
    <button className="add-operator__btn">
      Добавить оператора
      <img src={addImg} alt="add img" />
    </button>
  );
};

export default AddOperatorBtn;
