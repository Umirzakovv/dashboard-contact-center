/* eslint-disable react/prop-types */
import groupImg from "../../assets/icons/group.svg";
import "./title-input.scss";

const TitleInput = ({ ...props }) => {
  return (
    <div className="title-input-wrapper">
      <h4>Названия группы</h4>
      <div className="title-input">
        <input type="text" placeholder={props?.placeholder} />
        <img src={groupImg} alt="user img" />
      </div>
    </div>
  );
};

export default TitleInput;
