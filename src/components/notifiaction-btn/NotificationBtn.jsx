import { useContext } from "react";
import notificationImg from "../../assets/icons/notification.svg";
import "./notification-btn.scss";
import {
  NotificationContext,
  OverBreakDataContext,
} from "../../components/layout/Layout";

const NotificationBtn = () => {
  const { isOpen, setIsOpen } = useContext(NotificationContext);
  const { overBreakData } = useContext(OverBreakDataContext);
  const handleNotificationClick = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("sidebar_status", isOpen);
  };
  return (
    <div className="notification" onClick={handleNotificationClick}>
      <img src={notificationImg} alt="notification" />
      <span className="badge">
        {overBreakData?.length === undefined ? "0" : overBreakData?.length}
      </span>
    </div>
  );
};

export default NotificationBtn;
