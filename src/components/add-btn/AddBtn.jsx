/* eslint-disable react/prop-types */
import "./add-btn.scss";

const AddBtn = ({img, onClick}) => {
  return (
    <button className="add-worker__btn" onClick={onClick}>
      <img src={img} alt="add button" />
    </button>
  );
};

export default AddBtn;
