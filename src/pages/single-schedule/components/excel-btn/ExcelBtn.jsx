import reply from "../../../../assets/icons/reply.svg";
import "./excel-btn.scss";
const ExcelBtn = () => {
  return (
    <button className="shchedule-excel__btn">
      <img src={reply} alt="reply img" />
      Экспорт в Excel
    </button>
  );
};

export default ExcelBtn;
