/* eslint-disable react/prop-types */
import "./delete-btn-with-trash.scss";
const DeleteBtnWithTrash = ({ img, onClick }) => {
  return (
    <button onClick={onClick} className="delete-btn__with-trash">
      <img src={img} alt="delete icon" />
    </button>
  );
};

export default DeleteBtnWithTrash;