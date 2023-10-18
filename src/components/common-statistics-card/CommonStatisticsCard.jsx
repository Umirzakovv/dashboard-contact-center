import { setSpaceEveryThirdPlace } from "../../consts";
import "./common-statistics-card.scss";
import { FaUsers } from "react-icons/fa";

const CommonStatisticsCard = (props) => {
  return (
    <div className="common-statistics">
      <FaUsers className="common-statistics__icon" />
      <div>
        <h4>{props?.title}</h4>
        <p>{setSpaceEveryThirdPlace(String(props?.statistics))}</p>
      </div>
    </div>
  );
};

export default CommonStatisticsCard;
