/* eslint-disable react/prop-types */
import "./notification-card.scss";
import { AiFillLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";
import { MdTimer } from "react-icons/md";

const NotificationCard = (props) => {
  const lastLockCause = props?.operator?.lastLockCause;
  const lockCause = props?.operator?.lockCause;
  const agentStateDuration = props?.operator?.agentStateDuration;
  const lastAgentStateDuration = props?.operator?.lastAgentStateDuration;
  return (
    <div className="notification-card" key={props?.operator?.agent_id}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU"
        alt="user icon"
        className="operator-img"
      />
      <div className="operator-info">
        <h2 className="operator-title">
          {props?.operator?.lastName} {props?.operator?.firstName}{" "}
          {props?.operator?.secondName}
        </h2>
        <p className="operator-rmo__id">ID РМО: {props?.operator?.login}</p>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="over-break__icon"
        >
          {lastLockCause === "-1" || lastLockCause === "5" ? (
            <MdTimer />
          ) : (
            <AiFillLock />
          )}
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="over-break__time"
        >
          {lastLockCause === "-1" || lastLockCause === "5"
            ? formatSecondsToTime(agentStateDuration)
            : formatSecondsToTime(agentStateDuration)}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
