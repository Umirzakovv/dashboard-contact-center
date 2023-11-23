/* eslint-disable react/prop-types */
import "./supervisor-input.scss";
import userImg from "../../assets/icons/user.svg";

const SupervisorInput = ({ placeholder }) => {
  return (
    <div className="add-supervisor__input-wrapper">
      <h4>Имя супервайзера</h4>
      <div className="add-supervisor__input">
        <input type="text" placeholder={placeholder} />
        <img src={userImg} alt="user img" />
      </div>
    </div>
  );
};

export default SupervisorInput;
