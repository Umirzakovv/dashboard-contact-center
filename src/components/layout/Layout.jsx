/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Container from "../container/Container";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import "./layout.scss";
import io from "socket.io-client";

export const NotificationContext = createContext();
export const OverBreakDataContext = createContext();

const socket = io.connect("http://192.168.0.167:2004/");

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  localStorage.setItem("sidebar_status", isOpen);

  const [overBreakData, setOverBreakData] = useState();

  useEffect(() => {
    socket.emit("agentsLockAtTheMoment", (receivedData) => {
      setOverBreakData(receivedData);
    });

    setInterval(() => {
      socket.emit("agentsLockAtTheMoment", (receivedData) => {
        setOverBreakData(receivedData);
      });
    }, 10_000);
  }, []);

  return (
    <NotificationContext.Provider value={{ isOpen, setIsOpen }}>
      <OverBreakDataContext.Provider
        value={{ overBreakData, setOverBreakData }}
      >
        <Container className="layout">
          <div className={`layout-content ${!isOpen ? "sidebar-open" : ""}`}>
            <Header />
            <Navbar />
            <div>{children}</div>
          </div>
          {isOpen ? <SideBar /> : null}
        </Container>
      </OverBreakDataContext.Provider>
    </NotificationContext.Provider>
  );
};

export default Layout;
