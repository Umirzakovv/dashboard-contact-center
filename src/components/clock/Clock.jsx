import "./clock.scss";
const Clock = () => {
  let date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(6, "0").slice(0, 2)}`;

  return <div className="clock">{formattedTime}</div>;
};

export default Clock;
