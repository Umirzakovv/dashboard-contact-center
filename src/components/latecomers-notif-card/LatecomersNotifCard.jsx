/* eslint-disable react/prop-types */
import { LuCalendarClock } from "react-icons/lu";

import "./latecomers-notif-card.scss";

const LatecomersNotifCard = ({
  idRMO,
  fullName,
  status,
  comingTime,
  whichFloor,
}) => {
  return (
    <div className={`notification-card`}>
      <div style={{ display: "flex" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU"
          alt="user icon"
          className="operator-img"
        />
        <div className="operator-info">
          <h2 className="operator-title">{fullName}</h2>
          <p className="operator-rmo__id">ID РМО: {idRMO}</p>
        </div>
        <p className="operators-floor"> {whichFloor}</p>
        <div></div>
      </div>

      <div className="operator-overbreak__info">
        <div className="first-content_wrapper">
          <LuCalendarClock className="over-break__icon" />
          <p className="over-break__title">{comingTime}</p>
        </div>
        <p className="over-break__title">
          {status === "kelmadi" ? "Не пришел(ла)" : "Опоздал(а)"}
        </p>
      </div>
    </div>
  );
};

export default LatecomersNotifCard;
