/* eslint-disable react/display-name */
import { memo, useContext } from "react";
import NotificationCard from "../notification-card/NotificationCard";
import { OverBreakDataContext } from "../layout/Layout";
import "./sidebar.scss";

const SideBar = memo(() => {
  const { overBreakData } = useContext(OverBreakDataContext);
  console.log("side is rendering");
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 className="sidebar-title">Превышение перерыва</h4>
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
});

export default SideBar;
