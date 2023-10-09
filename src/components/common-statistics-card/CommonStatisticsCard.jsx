import "./common-statistics-card.scss";
import { FaUsers } from "react-icons/fa";

const CommonStatisticsCard = () => {
  return (
    <div className="common-statistics">
      <FaUsers className="common-statistics__icon"/>
      <div>
        <h4>Количество операторов</h4>
        <p>152</p>
      </div>
    </div>
  );
};

export default CommonStatisticsCard;
