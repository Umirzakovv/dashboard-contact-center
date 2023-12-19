/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import Select from "../select/Select";
import "./extended-filter-modal.scss";

import {
  degreeStatusData,
  employeeCategory,
  gender,
  genderData,
  jobTitles,
  tariffDischarge,
  titleData,
} from "../../../../consts/consts";
import { useContext, useEffect, useState } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import Input from "../../../../components/input/Input";

const ExtendedFilterModal = ({ filterModal, setFilterModal }) => {
  const { targetDivisionId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);

  const [nameValue, setNameValue] = useState("A-Z");
  const [genderValue, setGenderValue] = useState("all");
  const [jobValue, setJobValue] = useState("all");
  const [disChargeValue, setDisChargeValue] = useState("all");

  const [degreeStatusValue, setDegreeStatusValue] = useState("all");
  const [employeeCategoryValue, setEmployeeCategoryValue] = useState("all");
  const [startValue, setStartValue] = useState("all");
  const [endValue, setEndValue] = useState("all");

  const filterUrl = `http://192.168.61.169:2004/api/v1/division/extendedfilter/${targetDivisionId}?sortName=${nameValue}&gender=${genderValue}&job_titles=${jobValue}&tariff_discharge=${disChargeValue}&employee_category=${employeeCategoryValue}&start_experience=${startValue}&end_experience=${endValue}&information=${degreeStatusValue}`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(filterUrl)
      .then((res) => res.json())
      .then((data) => setWorkers(data))
      .catch((err) => console.log(err));
    setFilterModal(false);
  };

  const handleStartInputChange = (e) => {
    setStartValue(e?.target?.value);
  };

  const handleEndInputChange = (e) => {
    setEndValue(e?.target?.value);
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
        {titleData?.map((item) => {
          return (
            <Select key={item?.id} item={item} setSelectValues={setNameValue} />
          );
        })}

        {genderData?.map((item) => {
          return (
            <Select
              key={item?.id}
              item={item}
              setSelectValues={setGenderValue}
            />
          );
        })}

        {jobTitles?.map((item) => {
          return (
            <Select
              value={jobValue}
              key={item?.id}
              item={item}
              setSelectValues={setJobValue}
            />
          );
        })}

        {degreeStatusData?.map((item) => {
          return (
            <Select
              key={item?.id}
              item={item}
              setSelectValues={setDegreeStatusValue}
            />
          );
        })}

        {tariffDischarge?.map((item) => {
          return (
            <Select
              key={item?.id}
              item={item}
              setSelectValues={setDisChargeValue}
            />
          );
        })}

        {employeeCategory?.map((item) => {
          return (
            <Select
              key={item?.id}
              item={item}
              setSelectValues={setEmployeeCategoryValue}
            />
          );
        })}
        <div className="extended-filter__input">
          <p>Tajriba</p>
          <Input placeholder="С..." onChange={handleStartInputChange} />
        </div>
        <div className="extended-filter__input">
          <p>Tajriba</p>
          <Input placeholder="До..." onChange={handleEndInputChange} />
        </div>
      </div>
      <div className="extended-filter__btns">
        <CancelBtn title="Закрыть" onClick={handleModalCloseClick} />

        <SubmitBtn type="submit" title="Фильтрировать" />
      </div>
    </form>
  );
};

export default ExtendedFilterModal;
