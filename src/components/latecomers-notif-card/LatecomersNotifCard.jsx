/* eslint-disable react/prop-types */
import { LuCalendarClock } from "react-icons/lu";
import { LuCalendarX2 } from "react-icons/lu";

import "./latecomers-notif-card.scss";

const LatecomersNotifCard = ({
  idRMO,
  fullName,
  status,
  comingTime,
  whichFloor,
  imgSrc,
}) => {
  return (
    <div className="latecomers-notif-card">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={imgSrc} alt="user icon" className="operator-img" />
        <div className="operator-info">
          <h2 className="operator-title">{fullName}</h2>
          <p className="operator-rmo__id">ID РМО: {idRMO}</p>
          <p className="operators-floor"> {whichFloor}</p>
        </div>
        <div></div>
      </div>

      <div className="operator-overbreak__info">
        <div className="first-content_wrapper">
          {status === "kelmadi" ? (
            <LuCalendarX2 className="over-break__icon" />
          ) : (
            <LuCalendarClock className="over-break__icon" />
          )}

          <p className="over-break__title">{comingTime}</p>
        </div>
        <p className="over-break__title">
          {status === "kelmadi" ? "Не пришел(а)" : "Опоздал(а)"}
        </p>
      </div>
    </div>
  );
};

export default LatecomersNotifCard;
