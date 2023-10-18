import { setSpaceEveryNFromEnd } from "../../consts";
import "./common-statistics-card.scss";
import { FaUsers } from "react-icons/fa";

const CommonStatisticsCard = (props) => {
  return (
    <div className="common-statistics">
      <img
        src={props?.img}
        alt="statistics icon"
        className="common-statistics__icon"
      />
      <div>
        <h4>{props?.title}</h4>
        <p>{setSpaceEveryNFromEnd(String(props?.statistics), 3)}</p>
      </div>
    </div>
  );
};

export default CommonStatisticsCard;
