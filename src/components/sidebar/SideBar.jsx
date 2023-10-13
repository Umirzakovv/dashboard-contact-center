import NotificationCard from "../notification-card/NotificationCard";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar fade-out">
      <div className="sidebar-header">
        <h4 className="sidebar-title">Превышение лимита</h4>
      </div>
      <div className="notification-cards">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default SideBar;
