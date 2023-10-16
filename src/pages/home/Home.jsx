import { createContext, useState } from "react";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import Chart from "../../components/chart/Chart";
import SideBar from "../../components/sidebar/SideBar";
import "./home.scss"

export const NotificationContext = createContext();

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NotificationContext.Provider value={{ isOpen, setIsOpen }}>
      <Container className="dashboard">
        <div className={`dashboard-content ${!isOpen ? "sidebar-open" : null}`}>
          <Header />
          <Navbar />
          <main>
            <div className="common-statistics__wrapper">
              <CommonStatisticsCard
                title="Количество операторов"
                statistics="155"
              />
              <CommonStatisticsCard
                title="Количество операторов"
                statistics="155"
              />

              <CommonStatisticsCard
                title="Количество операторов"
                statistics="155"
              />
              <CommonStatisticsCard
                title="Количество операторов"
                statistics="155"
              />
            </div>
            <Chart />
            <Chart />

          </main>
        </div>
        {isOpen ? <SideBar /> : null}
      </Container>
    </NotificationContext.Provider>
  );
};

export default Dashboard;
