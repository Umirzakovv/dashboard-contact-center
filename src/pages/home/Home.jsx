import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container/Container";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import "./home.scss";

const Home = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <div className="common-statistics__card-wrapper">
        <CommonStatisticsCard />
        <CommonStatisticsCard />
        <CommonStatisticsCard />
        <CommonStatisticsCard />
        <CommonStatisticsCard />
      </div>
      
    </Container>
  );
};

export default Home;
