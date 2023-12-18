/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

import { extendedFilterSelections } from "../../../../consts/consts";
import { useContext, useEffect } from "react";
import { DivisionsContext } from "../../DatabaseOperators";

const ExtendedFilterModal = ({ filterModal, setFilterModal }) => {
  const { targetDivisionId } = useContext(DivisionsContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(targetDivisionId);
  };

  const handleModalCloseClick = () => {
    setFilterModal(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setFilterModal(false);
    }
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
    <form className="extended-filter-modal" onSubmit={handleFormSubmit}>
      <div className="extended-filter__selects">
        {extendedFilterSelections?.map((item) => {
          return <Select key={item?.id} item={item} />;
        })}
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Закрыть" onClick={handleModalCloseClick} />

        <SubmitBtn title="Фильтрировать" />
      </div>
    </form>
  );
};

export default ExtendedFilterModal;
