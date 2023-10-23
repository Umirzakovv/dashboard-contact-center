import { useEffect, useState } from "react";
import "./wheather.scss";
const Wheather = () => {
  const [wheather, setWheather] = useState();

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=e0fc8339155783877ec8f4bf16e35300"
    )
      .then((res) => res.json())
      .then((data) => setWheather(data));
  }, []);

  return (
    <div className="wheather">
      Ташкент {Math.round(wheather?.main?.temp)}&deg;
    </div>
  );
};

export default Wheather;
