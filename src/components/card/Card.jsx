/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {

  return (
    <div className={`card ${+props?.item?.queue > 0 ? "has-queue" : ""}`}>
      <h4 className="card-title">{props?.item?.title}</h4>
      <div className="card-info">
        <p className="card-info__title">В очереди</p>
        <p className="card-indo__content">{props?.item?.queue}</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">В сети</p>
        <p className="card-indo__content">{props?.item?.online}</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">В работе</p>
        <p className="card-indo__content">{props?.item?.in_job}</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">Свободные</p>
        <p className="card-indo__content">{props?.item?.free}</p>
      </div>
      <div className="card-info">
        <p className="card-info__title">Заблокированные</p>
        <p className="card-indo__content">{props?.item?.locked}</p>
      </div>
      <Link className="more-link" to="single-service">
        Подробно
      </Link>
    </div>
  );
};

export default Card;
