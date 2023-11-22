import userSvg from "../../assets/icons/user.svg";
const SupervisorInput = () => {
  return (
    <div className="supervisor-input__wrapper">
      <p>Имя Супервайзера</p>
      <div>
        <input type="text" />
        <img src={userSvg} alt="user img" />
      </div>
    </div>
  );
};

export default SupervisorInput;
