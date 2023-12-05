import locationImg from "../../../../assets/icons/location.svg";
import phoneImg from "../../../../assets/icons/phone.svg";

import "./more-modal-header.scss";

const MoreModalHeader = () => {
  return (
    <div className="more-modal__header">
      <img
        src="https://picsum.photos/173/173"
        alt="user img"
        className="user-more__info-img"
        style={{ width: "173px", height: "173px" }}
      />

      <div className="user-more__info-wrapper">
        <h1 className="user-more__info-title">
          Ganiyev Raxmatullaxodja Raximxodjayev
        </h1>
        <p className="user-more__info-position">Bo’lim boshlig’i</p>
        <div className="user-more__info-adress">
          <img src={locationImg} alt="location icon" />
          <p>
            Toshkent shahar, Olmazor tumani, Sag’bon maqola tor ko’chasi,
            51-xona
          </p>
        </div>
        <div className="user-more__info-phone">
          <img src={phoneImg} alt="phone icon" />
          <p>+998 99 404 33 01</p>
        </div>
      </div>
      <div className="user-more__info-position__title-wrapper">
        <p className="user-more__info-position__title">Bo’lim nomi:</p>
        <p>Ekspluatatsiya va xo’jalik ishlari gruruhi</p>
      </div>
    </div>
  );
};

export default MoreModalHeader;
