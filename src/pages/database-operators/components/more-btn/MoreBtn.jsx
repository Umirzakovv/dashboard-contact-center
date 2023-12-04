import "./more-btn.scss";
import moreBtn from "../../../../assets/icons/eye-blue.svg";

const MoreBtnBlue = () => {
  return (
    <button className="more-btn__blue">
      <img src={moreBtn} alt="more button" />
    </button>
  );
};

export default MoreBtnBlue;
