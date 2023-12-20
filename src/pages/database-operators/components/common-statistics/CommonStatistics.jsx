import { useContext } from "react";
import CommonStatisticsCard from "../../../../components/common-statistics-card/CommonStatisticsCard";
import "./common-statistics.scss";
import { DivisionsContext } from "../../DatabaseOperators";

const CommonStatistics = () => {
  const { workers } = useContext(DivisionsContext);
  return (
    <div className="common-statistics__database-operators">
      <CommonStatisticsCard
        statistics="150"
        title="Общее количество соотрудников"
      />
      <CommonStatisticsCard statistics="125" title="Активные соотрудники" />
      <CommonStatisticsCard statistics="25" title="Уволенные соотрудники" />
    </div>
  );
};

export default CommonStatistics;
