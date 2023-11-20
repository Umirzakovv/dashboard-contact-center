import { useContext } from "react";
import NotificationCard from "../notification-card/NotificationCard";
import { OverBreakDataContext } from "../layout/Layout";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./sidebar.scss";

const SideBar = () => {
  const { overBreakData } = useContext(OverBreakDataContext);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p></p>
        <h4 className="sidebar-title">Превышение перерыва</h4>
        <FaRegCircleXmark className="sidebar-xmark__icon" />
      </div>

      <div className="notification-cards">
        {overBreakData?.map((operator) => {
          return (
            <NotificationCard key={operator?.agent_id} operator={operator} />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
