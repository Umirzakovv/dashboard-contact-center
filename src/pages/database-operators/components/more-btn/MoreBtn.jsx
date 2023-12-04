/* eslint-disable react/prop-types */
import "./more-btn.scss";
import moreBtn from "../../../../assets/icons/eye-blue.svg";

const MoreBtnBlue = ({ onClick }) => {
  return (
    <button className="more-btn__blue" onClick={onClick}>
      <img src={moreBtn} alt="more button" />
    </button>
  );
};

export default MoreBtnBlue;
