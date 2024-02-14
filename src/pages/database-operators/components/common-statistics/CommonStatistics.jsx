import CommonStatisticsCard from "../../../../components/common-statistics-card/CommonStatisticsCard";
import "./common-statistics.scss";

const CommonStatistics = () => {
  return (
    <div className="common-statistics__database-operators">
      <CommonStatisticsCard />
      <CommonStatisticsCard />
      <CommonStatisticsCard />
    </div>
  );
};

export default CommonStatistics;
