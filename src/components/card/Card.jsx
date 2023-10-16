import { Link } from "react-router-dom";
import "./card.scss";
import { useState } from "react";

const Card = () => {
  const [hasQueue, setHasQueue] = useState(true);

  return (
    <div className={`card ${hasQueue ? "has-queue" : ""}`}>
      <h4 className="card-title"> 1000 UZ</h4>
      <div className="card-info">
        <p className="card-info__title">В очереди</p>
        <p className="card-indo__content">2</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">В сети</p>
        <p className="card-indo__content">2</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">В работе</p>
        <p className="card-indo__content">2</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">Свободные</p>
        <p className="card-indo__content">2</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">Заблокированные</p>
        <p className="card-indo__content">2</p>
      </div>
      <Link className="more-link" to="single-service">
        Подробно
      </Link>
    </div>
  );
};

export default Card;
