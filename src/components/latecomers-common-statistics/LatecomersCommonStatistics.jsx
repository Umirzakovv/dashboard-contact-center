/* eslint-disable react/prop-types */
import { AiOutlineLock } from "react-icons/ai";
import CommonStatisticsCard from "../common-statistics-card/CommonStatisticsCard";
import { TfiTimer } from "react-icons/tfi";

const LatecomersCommonStatistics = () => {
  const data = [
    {
      id: 1,
      title: "Опаздавшие на работу",
      statistics: "3500",
    },
    {
      id: 2,
      title: "Переходящие с перерыва в перерыв",
      statistics: "1895",
      icon: <AiOutlineLock />,
    },
    {
      id: 3,
      title: "Превышающие перерыв",
      statistics: "1895",
      icon: <TfiTimer />
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
