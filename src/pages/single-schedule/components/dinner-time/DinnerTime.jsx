import { useState } from "react";
import "./dinner-time.scss";
import { formatTime } from "../../../../consts";

const DinnerTime = () => {
  const [startInputValue, setStartInputValue] = useState("");
  const [endInputValue, setEndInputValue] = useState("");


  const handleStartInputChange = (e) => {
    setStartInputValue(formatTime(e.target.value));
  };

  const handleEndInputChange = (e) => {
    setEndInputValue(formatTime(e.target.value));
  };


  return (
    <div className="dinner-time">
      <h4>Выбрать время обеда:</h4>
      <div className="dinner-time__inputs">
        <input
          type="text"
          className="dinner-start__time-input"
          placeholder="Начало"
          onChange={handleStartInputChange}
          value={startInputValue}
        />
        <hr />
        <input
          type="text"
          className="dinner-end__time-input"
          placeholder="Конец"
          onChange={handleEndInputChange}
          value={endInputValue}
        />
      </div>
    </div>
  );
};

export default DinnerTime;
