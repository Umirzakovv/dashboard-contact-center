import {BsExclamationDiamond} from "react-icons/bs"
import "./no-data.scss";

const NoData = () => {
  return (
    <div className="no-data">
      <BsExclamationDiamond className="no-data__icon"/>
      <p>Информация по данному запросу не найдена</p>
    </div>
  );
};

export default NoData;
