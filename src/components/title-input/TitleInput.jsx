import groupImg from "../../assets/icons/group.svg";
import "./title-input.scss";

const TitleInput = () => {
  return (
    <div className="title-input__wrapper">
      <p>Названия группы</p>
      <div>
        <input type="text" />
        <img src={groupImg} alt="group img" />
      </div>
    </div>
  );
};

export default TitleInput;
