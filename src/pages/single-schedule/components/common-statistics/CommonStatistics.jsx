/* eslint-disable react/prop-types */
import CommonStatisticsCard from "../../../../components/common-statistics-card/CommonStatisticsCard";

const CommonStatisticsSingleSchedule = () => {
  return (
    <div
      className="common-statistics__wrapper"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CommonStatisticsCard
        // img={acceptedIcon}
        title="На работе"
        statistics="123"
      />

      <CommonStatisticsCard
        // img={presentedIcon}
        title="В перерыве"
        statistics="123"
      />
      <CommonStatisticsCard
        // img={lostIcon}
        title="На больничном"
        statistics="123"
      />
      <CommonStatisticsCard
        // img={queueDispatchedIcon}
        title="В отпуске"
        statistics="123"
      />
    </div>
  );
};

export default CommonStatisticsSingleSchedule;
