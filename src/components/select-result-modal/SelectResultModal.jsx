import "./select-result-modal.scss";
import xmark from "../../assets/icons/xmark.svg";

const SelectResultModal = () => {
  const data = [
    // { id: 1, title: "Abrorov Sardor" },
    // { id: 2, title: "Adhamov Muhammad" },
    // { id: 3, title: "Rahimov Farrux" },
    // { id: 4, title: "Ismonov Mirxonjon" },
    // { id: 5, title: "Umirzakov Muhammadyosin" },
    // { id: 6, title: "Rahimov Elyor" },
  ];
  return (
    <div className={`select-result__modal ${data.length < 0 ? "select-result__modal-inactive" : ""}`}>
      {data?.map((item) => {
        return (
          <div key={item?.id} className="select-result__wrapper">
            <p className="select-result">{item?.title}</p>
            <button>
              <img src={xmark} alt="xmark icon" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectResultModal;
