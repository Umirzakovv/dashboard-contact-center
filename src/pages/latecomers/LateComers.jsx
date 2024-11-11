import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import LatecomersNotifCard from "../../components/latecomers-notif-card/LatecomersNotifCard";
import "./latecomers.scss";
const Latecomers = () => {
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/1BF7Z9CTKdL-RvBwzZTcB4gvOqoviX6fUwHIBmSlG_ow/values/DASHBOARD?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCkNZMxE8VEszpakihyUtPwsK7Wr-kq1Yw";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setError("Ошибка при получение :", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Fetch every 30s (30000 ms)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <Layout>
      <div className="latecomers-sidebar">
        {error ? (
          <p>{error}</p>
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className="latecomers-notif-cards">
            {data?.values?.map((item) => {
              return (
                <LatecomersNotifCard
                  key={item[0] && item[0]}
                  idRMO={item[0] && item[0]}
                  fullName={item[1] && item[1]}
                  status={item[2] && item[2]}
                  comingTime={item[3] && item[3]}
                  whichFloor={item[5] && item[5]}
                  imgSrc={item[6] && item[6]}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Latecomers;
