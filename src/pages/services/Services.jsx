import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import io from "socket.io-client";

import "./servives.scss";
import { useEffect, useState } from "react";

const socket = io.connect("http://192.168.0.167:2004/");

const Services = () => {
  const [data, setData] = useState();
  const [sortedData, setSortedData] = useState();

  useEffect(() => {
    setInterval(() => {
      socket.emit("data", (receivedData) => {
        setData(receivedData);
        console.log(data);
        //  setSortedData(data?.sort((a, b) => b?.queue - a?.queue));
        // console.log(sortedData);
      });
    }, 5000);
  }, []);

  return (
    <Layout>
      <div className="services">
        {data?.map((item) => {
          return <Card key={item?.goup_id} item={item} />;
        })}
      </div>
    </Layout>
  );
};

export default Services;
