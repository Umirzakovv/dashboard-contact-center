import notificationImg from "../../assets/icons/notification.svg";
import "./notification.scss";

const Notification = () => {
  return (
    <div className="notification">
      <img src={notificationImg} alt="notification" />
      <span className="badge">9</span>
    </div>
  );
};

export default Notification;
