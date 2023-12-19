/* eslint-disable react/prop-types */
import "./submit-btn.scss";
const SubmitBtn = ({ ...props }) => {
  return (
    <button className="submit-btn" {...props}>
      {props?.title}
    </button>
  );
};

export default SubmitBtn;
