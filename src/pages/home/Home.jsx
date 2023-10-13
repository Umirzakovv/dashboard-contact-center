import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container/Container";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Header />
        <Navbar />
        <CommonStatisticsCard />
      </Container>
    </div>
  );
};

export default Home;
