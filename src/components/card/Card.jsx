import Button from "../button/Button";
import "./card.scss";
const Card = () => {
  return (
    <div className="card">
      <h4 className="card-title"> Что то на русском</h4>
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
      <Button className="more-btn" title="Подробно"></Button>
    </div>
  );
};

export default Card;
