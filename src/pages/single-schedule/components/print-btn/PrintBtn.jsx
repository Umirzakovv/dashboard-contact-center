import printImg from "../../../../assets/icons/print.svg";
import "./print-btn.scss";
const PrintBtn = () => {
  return (
    <button className="shchedule-print__btn">
      <img src={printImg} alt="print img" />
      Печатать
    </button>
  );
};

export default PrintBtn;
