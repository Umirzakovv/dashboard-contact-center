import "./clock.scss";
const Clock = () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="clock">
      <p  className="time">{formattedTime}</p>
      <p  className="date">{`${day}.${month+1}.${year}`}</p>
    </div>
  );
};

export default Clock;
