import editBtn from "../../assets/icons/pencil-blue.svg";
import "./edit-btn-blue.scss";
const EditBtnBlue = () => {
  return (
    <button className="edit-btn__blue">
      <img src={editBtn} alt="edit button" />
    </button>
  );
};

export default EditBtnBlue;
