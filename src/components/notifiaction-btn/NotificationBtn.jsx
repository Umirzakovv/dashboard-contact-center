import { useContext } from "react";
import notificationImg from "../../assets/icons/notification.svg";
import "./notification-btn.scss";
import { NotificationContext } from "../../pages/home/Home";

const Notification = () => {
  const { isOpen, setIsOpen } = useContext(NotificationContext);

  return (
    <div className="notification" onClick={() => setIsOpen(!isOpen)}>
      <img src={notificationImg} alt="notification" />
      <span className="badge">9</span>
    </div>
  );
};

export default Notification;
