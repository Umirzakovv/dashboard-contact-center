import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

const ExtendedFilterModal = () => {
  return (
    <div className="extended-filter-modal">
      <div className="extended-filter__selects">
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Сбросить"/>
        <SubmitBtn title="Фильтрировать"/>
      </div>
    </div>
  );
};

export default ExtendedFilterModal;
