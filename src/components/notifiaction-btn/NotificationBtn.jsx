import { useContext } from "react";
import notificationImg from "../../assets/icons/notification.svg";
import "./notification-btn.scss";
import {
  NotificationContext,
  OverBreakDataContext,
} from "../../components/layout/Layout";

const Notification = () => {
  const { isOpen, setIsOpen } = useContext(NotificationContext);
  const { overBreakData } = useContext(OverBreakDataContext);
  const handleNotificationClick = () => {
    setIsOpen(localStorage.setItem("sidebar_status", false));
  };

  return (
    <div className="notification" onClick={handleNotificationClick}>
      <img src={notificationImg} alt="notification" />
      <span className="badge">{overBreakData?.length}</span>
    </div>
  );
};

export default Notification;
