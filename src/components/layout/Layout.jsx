/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import Container from "../container/Container";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";
import "./layout.scss";

export const NotificationContext = createContext();

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(localStorage.getItem("sidebar_status"));

  return (
    <NotificationContext.Provider value={{ isOpen, setIsOpen }}>
      <Container className="layout">
        <div className={`layout-content ${!isOpen ? "sidebar-open" : null}`}>
          <Header />
          <Navbar />
          <div>{children}</div>
        </div>
        {isOpen ? <SideBar /> : null}
      </Container>
    </NotificationContext.Provider>
  );
};

export default Layout;
