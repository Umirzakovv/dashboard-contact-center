/* eslint-disable react/prop-types */
import "./more-btn.scss";
const MoreBtn = ({ img, onClick }) => {
  return (
    <button className="more-btn__blue" onClick={onClick}>
      <img src={img} alt="more button" />
    </button>
  );
};

export default MoreBtn;
