/* eslint-disable react/prop-types */
import CommonStatisticsCard from "../common-statistics-card/CommonStatisticsCard";
import acceptedIcon from "../../assets/icons/phone-incoming (1).svg";
import presentedIcon from "../../assets/icons/phone-call.svg";
import lostIcon from "../../assets/icons/phone-missed (1).svg";
import queueDispatchedIcon from "../../assets/icons/phone-off (2).svg";

const SinglePageCommonStatistics = (props) => {
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
        img={acceptedIcon}
        title="Поступившие звонки"
        statistics={props?.statistics?.sumAcceptedCallCount}
      />

      <CommonStatisticsCard
        img={presentedIcon}
        title="Предоствленные звонки"
        statistics={props?.statistics?.sumPresentedCallCount}
      />
      <CommonStatisticsCard
        img={lostIcon}
        title="Потерянные звонки"
        statistics={props?.statistics?.sumLostCallCount}
      />
      <CommonStatisticsCard
        img={queueDispatchedIcon}
        title="Отбывшихся в очереди"
        statistics={props?.statistics?.sumQueueDispatchedCallCoun}
      />
    </div>
  );
};

export default SinglePageCommonStatistics;
