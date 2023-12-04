/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

import { extendedFilterSelections } from "../../../../mock/mock-data";

const ExtendedFilterModal = ( ) => {

  const handleClick = () => {
    console.log(extendedFilterSelections);
  };
  return (
    <div className="extended-filter-modal">
      <div className="extended-filter__selects">
        {extendedFilterSelections?.map((item) => {
          return <Select key={item?.id} item={item}/>;
        })}
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Сбросить" onClick={handleClick} />
        <SubmitBtn title="Фильтрировать" />
      </div>
    </div>
  );
};

export default ExtendedFilterModal;
