import "./add-btn.scss";
import plusImg from "../../../../assets/icons/plus-white.svg";
const AddBtn = () => {
  return (
    <button className="add-worker__btn">
      <img src={plusImg} alt="add button" />
    </button>
  );
};

export default AddBtn;
