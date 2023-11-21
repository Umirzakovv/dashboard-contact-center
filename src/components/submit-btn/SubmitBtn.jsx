/* eslint-disable react/prop-types */
import "./submit-btn.scss";
const SubmitBtn = ({ title }) => {
  return (
    <button className="submit-btn" type="submit">
      {title}
    </button>
  );
};

export default SubmitBtn;
