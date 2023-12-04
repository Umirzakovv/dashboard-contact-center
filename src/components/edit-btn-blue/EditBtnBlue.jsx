/* eslint-disable react/prop-types */
import editBtn from "../../assets/icons/pencil-blue.svg";
import "./edit-btn-blue.scss";

const EditBtnBlue = ({ onClick }) => {
  return (
    <button className="edit-btn__blue" onClick={onClick}>
      <img src={editBtn} alt="edit button" />
    </button>
  );
};

export default EditBtnBlue;
