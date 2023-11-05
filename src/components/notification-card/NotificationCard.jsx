/* eslint-disable react/prop-types */
import "./notification-card.scss";
import { BiRun } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";
import { FaCrown, FaHamburger } from "react-icons/fa";
import { GiCigarette } from "react-icons/gi";
import { BsFillLaptopFill } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";

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
          {lastLockCause === "-1" || lastLockCause === "5" ? "time" : "lock"}
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="over-break__time"
        >
          {lastLockCause === "-1" || lastLockCause === "5"
            ? agentStateDuration
            : lastAgentStateDuration + " - " + agentStateDuration}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
