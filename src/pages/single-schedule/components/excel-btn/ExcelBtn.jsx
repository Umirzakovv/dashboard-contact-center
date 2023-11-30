/* eslint-disable react/prop-types */
import reply from "../../../../assets/icons/reply.svg";
import "./excel-btn.scss";
const ExcelBtn = ({ icon, style }) => {
  return (
    <button className="shchedule-excel__btn" style={style}>
      <img src={icon ? icon : reply} alt="reply img" />
      Экспортировать в Excel
    </button>
  );
};

export default ExcelBtn;
