/* eslint-disable react/prop-types */
import "./delete-btn.scss";
const DeleteBtn = ({ title, onClick }) => {
  return (
    <button className="delete-btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default DeleteBtn;
