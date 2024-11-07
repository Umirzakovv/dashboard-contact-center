/* eslint-disable react/prop-types */
import { AiOutlineLock } from "react-icons/ai";
import CommonStatisticsCard from "../common-statistics-card/CommonStatisticsCard";
import { TfiTimer } from "react-icons/tfi";
import { useEffect, useState } from "react";

const LatecomersCommonStatistics = () => {
  const [commonData, setCommonData] = useState();

  useEffect(() => {
    fetch("http://192.168.42.176:2000/api/v1/agents/allBlock")
      .then((res) => res.json())
      .then((data) => setCommonData(data));
  }, []);

  const data = [
    {
      id: 1,
      title: "Опаздавшие на работу",
      statistics: commonData?.allBlockAgents,
    },
    {
      id: 2,
      title: "Переходящие с перерыва в перерыв",
      statistics: commonData?.findBlocks,
      icon: <AiOutlineLock />,
    },
    {
      id: 3,
      title: "Превышающие перерыв",
      statistics: commonData?.findTime,
      icon: <TfiTimer />,
    },
  ];

  return (
    <div
      className="latecomers-common__statistics-wrapper"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {data?.map((item) => {
        return (
          <CommonStatisticsCard
            key={item?.id}
            title={item?.title}
            statistics={item?.statistics}
            icon={item?.icon}
            img={item?.img}
          />
        );
      })}
    </div>
  );
};

export default LatecomersCommonStatistics;
