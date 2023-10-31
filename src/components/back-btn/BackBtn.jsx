import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import "./back-btn.scss";

const BackBtn = () => {
  return (
    <Link to="/services" className="back-btn">
      <IoChevronBack className="back-btn__icon"/> Назад
    </Link>
  );
};

export default BackBtn;
