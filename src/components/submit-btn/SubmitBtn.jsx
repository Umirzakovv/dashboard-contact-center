/* eslint-disable react/prop-types */
import "./submit-btn.scss";
const SubmitBtn = ({ title, onClick }) => {
  return (
    <button className="submit-btn" type="submit" onClick={onClick}>
      {title}
    </button>
  );
};

export default SubmitBtn;
