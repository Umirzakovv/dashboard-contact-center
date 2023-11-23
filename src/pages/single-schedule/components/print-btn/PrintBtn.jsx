import printImg from "../../../../assets/icons/print.svg";
import "./print-btn.scss";
const PrintBtn = () => {
  const handlePrintClick = () => {
    window.print();
  };

  return (
    <button className="shchedule-print__btn" onClick={handlePrintClick}>
      <img src={printImg} alt="print img" />
      Печатать
    </button>
  );
};

export default PrintBtn;
