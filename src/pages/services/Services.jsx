import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import io from "socket.io-client";

import "./servives.scss";
import { useEffect, useState } from "react";

const socket = io.connect("http://192.168.42.176:2000/");

const Services = () => {
  const [data, setData] = useState();

  useEffect(() => {
    socket.emit("data", (receivedData) => {
      setData(receivedData);
    });

    setInterval(() => {
      socket.emit("data", (receivedData) => {
        setData(receivedData);
      });
    }, 7000);

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
