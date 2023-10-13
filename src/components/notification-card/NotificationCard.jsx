import { GiCigarette } from "react-icons/gi";

import "./notification-card.scss";

const NotificationCard = () => {
  return (
    <div className="notification-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
        alt="man img"
      />
      <div className="operator-info">
        <h2>Иванов Иван Иванович</h2>
        <p>Названия услуги</p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <GiCigarette />
          11:32
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
