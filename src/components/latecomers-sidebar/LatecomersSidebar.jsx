import { useEffect, useState } from "react";
import "./latecomers-sidebar.scss";
import LatecomersNotifCard from "../latecomers-notif-card/LatecomersNotifCard";
const LatecomersSidebar = () => {
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/1BF7Z9CTKdL-RvBwzZTcB4gvOqoviX6fUwHIBmSlG_ow/values/DASHBOARD?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCkNZMxE8VEszpakihyUtPwsK7Wr-kq1Yw";
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Fetch every 5 minutes (300000 ms)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <div className="latecomers-sidebar">
      <div className="latecomers-sidebar-header">
        <h6 className="latecomers-sidebar-title">Опоздавшие</h6>
      </div>
      <div>
        {data?.values?.map((item) => {
          return (
            <LatecomersNotifCard
              key={item[0]}
              idRMO={item[0]}
              fullName={item[1]}
              status={item[2]}
              comingTime={item[3]}
              whichFloor={item[5]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatecomersSidebar;
