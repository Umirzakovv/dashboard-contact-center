import Layout from "../../components/layout/Layout";
import ServiceCard from "./components/service-card/ServiceCard";
import Plus from "../../assets/icons/plus.svg";

const Schedule = () => {
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
    cursor: "pointer"
  };

  return (
    <Layout>
      <div style={WrapperStyle}>
        {services?.map((service) => {
          return <ServiceCard key={service?.id} service={service} />;
        })}

        <div style={AddBtn}>
          <img src={Plus} alt="plus icon" />
          <h6 style={{ fontSize: "2rem", color: "#64748B" }}>Добавить</h6>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
