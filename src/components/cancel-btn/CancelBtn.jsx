/* eslint-disable react/prop-types */
import "./cancel-btn.scss";

const CancelBtn = ({ title, onClick }) => {
  return <button className="cancel-btn" onClick={onClick}>{title}</button>;
};

export default CancelBtn;
