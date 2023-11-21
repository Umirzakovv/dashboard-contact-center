/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import "./back-btn.scss";

const BackBtn = ({ href }) => {
  return (
    <Link to={href} className="back-btn">
      <IoChevronBack className="back-btn__icon" /> Назад
    </Link>
  );
};

export default BackBtn;
