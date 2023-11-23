/* eslint-disable react/prop-types */
import groupImg from "../../assets/icons/group.svg";
import "./title-input.scss";

const TitleInput = ({ placeholder }) => {
  return (
    <div className="title-input__wrapper">
      <p>Названия группы</p>
      <div>
        <input type="text" placeholder={placeholder} />
        <img src={groupImg} alt="group img" />
      </div>
    </div>
  );
};

export default TitleInput;
