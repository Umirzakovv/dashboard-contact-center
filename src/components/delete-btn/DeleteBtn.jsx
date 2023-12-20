/* eslint-disable react/prop-types */
import "./delete-btn.scss";
const DeleteBtn = ({ ...props }) => {
  return (
    <button className="delete-btn" onClick={props?.onClick}>
      {props?.title}
    </button>
  );
};

export default DeleteBtn;
