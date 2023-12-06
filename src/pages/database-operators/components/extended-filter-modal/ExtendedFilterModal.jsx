/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

import { extendedFilterSelections } from "../../../../mock/mock-data";
import { useEffect } from "react";

const ExtendedFilterModal = ({ filterModal, setFilterModal }) => {
  const handleClick = () => {};

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setFilterModal(false);
    }
  };

  const handleModalCloseClick = () => {
    setFilterModal(false);
  };

  useEffect(() => {
    if (filterModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModal, setFilterModal]);
  return (
    <div className="extended-filter-modal">
      <div className="extended-filter__selects">
        {extendedFilterSelections?.map((item) => {
          return <Select key={item?.id} item={item} />;
        })}
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Закрыть" onClick={handleModalCloseClick} />

        <SubmitBtn title="Фильтрировать" />
      </div>
    </div>
  );
};

export default ExtendedFilterModal;
