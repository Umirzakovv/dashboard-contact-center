/* eslint-disable react/prop-types */
import { BiSolidUser } from "react-icons/bi";
import "./notification-card.scss";
import { BiRun } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";

const NotificationCard = (props) => {
  console.log(props);
  return (
    <div className="notification-card">
      <BiSolidUser className="operator-icon" />
      <div className="operator-info">
        <h2>
          {props?.operator?.lastName} {props?.operator?.firstName}{" "}
          {props?.operator?.secondName}
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          {props?.operator?.lastLockCause === props?.operator?.lockCause ? (
            <BiRun />
          ) : props?.operator?.lastLockCause !== props?.operator?.lockCause ? (
            <p style={{ display: "flex", alignItems: "center" }}>
              <AiFillLock /> &rarr; <AiFillLock />
            </p>
          ) : null}
          {formatSecondsToTime(+props?.operator?.agentStateDuration)}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
