/* eslint-disable react/prop-types */
import { setSpaceEveryNFromEnd } from "../../consts";
import "./common-statistics-card.scss";

const CommonStatisticsCard = ({...props}) => {
  return (
    <div className="common-statistics">
      <div className="common-statistics__icon">{props?.icon}</div>
      <div className="common-statistics__info">
        <h4>{props?.title}</h4>
        <p>{setSpaceEveryNFromEnd(String(props?.statistics), 3)}</p>
      </div>
    </div>
  );
};

export default CommonStatisticsCard;
