import { useEffect, useState } from "react";
import NotificationCard from "../notification-card/NotificationCard";
import "./sidebar.scss";
import { io } from "socket.io-client";

const socket = io.connect("http://192.168.0.167:2004/");

const SideBar = () => {
  const [data, setData] = useState();
  useEffect(() => {

    setInterval(() => {

      socket.emit("agentsLock", (receivedData) => {
        setData(receivedData);
      });
      
    }, 5000);
    console.log(data);

  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 className="sidebar-title">Превышение перерыва</h4>
      </div>
      <div className="notification-cards">
        {data?.map((operator) => {
          return (
            <NotificationCard key={operator?.agent_id} operator={operator} />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
