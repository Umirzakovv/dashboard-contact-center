import "./add-supervisor-input.scss";
import userImg from "../../../../assets/icons/user.svg";
const AddSupervisorInput = () => {
  return (
    <div className="add-supervisor__input-wrapper">
      <h4>Имя супервайзера</h4>
      <div className="add-supervisor__input">
        <input type="text" placeholder="Ф.И.О" />
        <img src={userImg} alt="user img" />
      </div>
    </div>
  );
};

export default AddSupervisorInput;
