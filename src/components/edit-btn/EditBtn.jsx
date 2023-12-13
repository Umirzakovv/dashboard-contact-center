/* eslint-disable react/prop-types */
import "./edit-btn.scss";

const EditBtn = ({ img, onClick }) => {
  return (
    <button className="edit-btn" onClick={onClick}>
      <img src={img} alt="edit button" />
    </button>
  );
};

export default EditBtn;
