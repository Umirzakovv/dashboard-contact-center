import { BiSolidUser } from "react-icons/bi";
import {formatSecondsToTime} from "../../consts/index.js";
import "./notification-card.scss";

const NotificationCard = (props) => {
  console.log(props.operator?.agentStateDuration);

  return (
    <div className="notification-card">
      <BiSolidUser className="operator-icon" />
      <div className="operator-info">
        <h2>
          {props?.operator?.lastName} {props?.operator?.firstName}{" "}
          {props?.operator?.secondName}
        </h2>
        <p style={{ display: "flex", alignItems: "center" }}>
          {formatSecondsToTime(+props?.operator?.agentStateDuration)}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
