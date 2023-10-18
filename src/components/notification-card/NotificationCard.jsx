import { GiCigarette } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import "./notification-card.scss";
import { formatSecondsToTime } from "../../consts";

const NotificationCard = (props) => {
  return (
    <div className="notification-card">
      <BiSolidUser className="operator-icon" />
      <div className="operator-info">
        <h2>
          {props?.operator?.lastName} {props?.operator?.firstName}{" "}
          {props?.operator?.secondName}
        </h2>
        <p style={{ display: "flex", alignItems: "center" }}>
          {formatSecondsToTime(+props?.operator?.lastAgentStateDuration)}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
