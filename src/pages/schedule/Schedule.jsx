import Layout from "../../components/layout/Layout";
import ServiceCard from "./components/service-card/ServiceCard";
import Plus from "../../assets/icons/plus.svg";
import { useState } from "react";
import AddServiceModal from "./components/add-service-modal/AddServiceModal";
import Curtain from "../../components/curtain/Curtain";

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    { id: 1, title: "1000", href: "1000" },
    { id: 2, title: "1009", href: "1009" },
  ];

  const WrapperStyle = {
    padding: "10rem 20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const AddBtn = {
    background: "#E1E6EF",
    display: "flex",
    alignItems: "center",
    padding: "10rem 19rem",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div style={WrapperStyle}>
        {services?.map((service) => {
          return <ServiceCard key={service?.id} service={service} />;
        })}

        <div style={AddBtn} onClick={handleClick}>
          <img src={Plus} alt="plus icon" />
          <h6 style={{ fontSize: "2rem", color: "#64748B" }}>Добавить</h6>
        </div>
      </div>
      {isModalOpen ? <AddServiceModal setIsModalOpen={setIsModalOpen} /> : null}
      {isModalOpen ? <Curtain /> : null}
    </Layout>
  );
};

export default Schedule;
