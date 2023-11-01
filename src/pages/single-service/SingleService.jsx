import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import BackBtn from "../../components/back-btn/BackBtn";
import { io } from "socket.io-client";
import Chart from "../../components/chart/Chart";
import { useEffect, useState } from "react";
import CommonStatisticsCard from "../../components/common-statistics-card/CommonStatisticsCard";
import SinglePageCommonStatistics from "../../components/single-page-common-statistics/SinglePageCommonStatistics";

const socket = io.connect("http://192.168.0.167:2004/");

const SingleService = () => {
  const { id } = useParams();
  const [currentStatistics, setCurrentStatistics] = useState();

  useEffect(() => {
    socket.emit("statictikGroup", { group_id: id }, (receivedData) => {
      setCurrentStatistics(receivedData);
    });

    setInterval(() => {
      socket.emit("statictikGroup", { group_id: id }, (receivedData) => {
        setCurrentStatistics(receivedData);
      });
    }, 10_000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Layout>
        <BackBtn />
        <SinglePageCommonStatistics statistics={currentStatistics} />
        <Chart statistics={currentStatistics} />
      </Layout>
    </div>
  );
};

export default SingleService;
