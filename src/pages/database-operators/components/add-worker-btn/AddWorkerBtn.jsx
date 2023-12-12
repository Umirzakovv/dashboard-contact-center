import "./add-worker-btn.scss";
import plusImg from "../../../../assets/icons/plus-white.svg";
const AddWorkerBtn = () => {
  return (
    <button className="add-worker__btn">
      <img src={plusImg} alt="add worker button" />
    </button>
  );
};

export default AddWorkerBtn;
