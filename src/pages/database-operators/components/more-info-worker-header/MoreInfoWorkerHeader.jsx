/* eslint-disable react/prop-types */
import locationImg from "../../../../assets/icons/location.svg";
import phoneImg from "../../../../assets/icons/phone.svg";

import "./more-info-worker-header.scss";

const MoreInfoWorkerHeader = ({ targetWorkerData }) => {
  const targetWorker = targetWorkerData[0];
  return (
    <div className="more-modal__header-wrapper">
      <div className="more-modal__header">
        <img
          src={targetWorker?.user_img}
          alt="user img"
          className="user-more__info-img"
          style={{ width: "150px", height: "150px" }}
        />

        <div className="user-more__info-wrapper">
          <h1 className="user-more__info-title">{targetWorker?.name}</h1>
          <p className="user-more__info-position">{targetWorker?.job_titles}</p>
          <div className="user-more__info-adress">
            <img src={locationImg} alt="location icon" />
            <p>{targetWorker?.address}</p>
          </div>
          <div className="user-more__info-phone">
            <img src={phoneImg} alt="phone icon" />
            <p>{targetWorker?.phone_number}</p>
          </div>
        </div>
      </div>
      <div className="user-more__info-position__title-wrapper">
        <p className="user-more__info-position__title">Bo’lim nomi:</p>
        <p>Ekspluatatsiya va xo’jalik ishlari gruruhi</p>
      </div>
    </div>
  );
};

export default MoreInfoWorkerHeader;
