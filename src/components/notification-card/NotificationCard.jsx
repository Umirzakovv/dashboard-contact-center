/* eslint-disable react/prop-types */
import "./notification-card.scss";
// import { AiFillLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { FaSmoking } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { PiMonitorFill } from "react-icons/pi";

function getIcon(status) {
  switch (status) {
    case "2":
      return <FaSmoking />;
    case "3":
      return <FaPersonRunning />;
    case "4":
      return <PiMonitorFill />;
    case "5":
      return <FaHamburger />;
    case "6":
      return <FaPersonRunning />;
    case "7":
      return <FaPersonRunning />;
    default:
      return null;
  }
}

const NotificationCard = ({ operator }) => {
  return (
    <div
      className={`notification-card ${
        operator?.banInfo === "block" ? "notification-card_block" : ""
      }`}
      key={operator?.agent_id}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU"
          alt="user icon"
          className="operator-img"
        />
        <div className="operator-info">
          <h2 className="operator-title">
            {operator?.lastName} {operator?.firstName} {operator?.secondName}
          </h2>
          <p className="operator-rmo__id">ID РМО: {operator?.login}</p>
        </div>
      </div>

      <div className="operator-overbreak__info">
        <div className="over-break__icon">
          {operator?.banInfo === "time" ? (
            <MdTimer />
          ) : (
            <div>
              {getIcon(operator?.lastLockCause)}
              <FaArrowRightLong className="over-break_arrow-icon" />
              {getIcon(operator?.lockCause)}
            </div>
          )}
        </div>

        <div className="over-break__time">
          {operator?.banInfo === "time" ? (
            <p>{formatSecondsToTime(operator?.agentStateDuration)}</p>
          ) : (
            <p>
              {formatSecondsToTime(operator?.lastAgentStateDuration) +
                " - " +
                formatSecondsToTime(operator?.agentStateDuration)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
