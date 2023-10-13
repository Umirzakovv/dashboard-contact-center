import { createContext, useState } from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import "./HomeLayout.scss";

export const NotificationContext = createContext();

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NotificationContext.Provider value={{ isOpen, setIsOpen }}>
      <Container className="home-layout">
        <div className="home-content">
          <Header />
          <Navbar />
          <div></div>
        </div>
        {isOpen ? <SideBar /> : null}
      </Container>
    </NotificationContext.Provider>
  );
};

export default HomeLayout;
