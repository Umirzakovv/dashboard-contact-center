import { useContext } from "react";
import notificationImg from "../../assets/icons/notification.svg";
import { NotificationContext } from "../../layouts/HomeLayout";
import "./notification-btn.scss";

const Notification = () => {
  const { isOpen, setIsOpen } = useContext(NotificationContext);
  console.log(isOpen);

  return (
    <div className="notification" onClick={() => setIsOpen(!isOpen)}>
      <img src={notificationImg} alt="notification" />
      <span className="badge">9</span>
    </div>
  );
};

export default Notification;
