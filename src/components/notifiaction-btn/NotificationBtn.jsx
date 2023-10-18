import { useContext } from "react";
import notificationImg from "../../assets/icons/notification.svg";
import "./notification-btn.scss";
import { NotificationContext } from "../../components/layout/Layout";

const Notification = () => {
  const { isOpen, setIsOpen } = useContext(NotificationContext);
  const handleNotificationClick = () => {
    console.log(localStorage.setItem("sidebar_status", !isOpen));
    // setIsOpen(!localStorage.getItem("sidebar_status"))
  };

  return (
    <div className="notification" onClick={handleNotificationClick}>
      <img src={notificationImg} alt="notification" />
      <span className="badge">9</span>
    </div>
  );
};

export default Notification;
