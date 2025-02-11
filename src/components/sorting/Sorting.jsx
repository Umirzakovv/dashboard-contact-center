/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./sorting.scss";
import { LateComersListContext, LoadingContext } from "../layout/Layout";

const Sorting = () => {
  const { setLatecomers } = useContext(LateComersListContext);
  const { setLoading } = useContext(LoadingContext);

  const handleSelect = async (e) => {
    const sortingUrl = `http://192.168.42.176:2010/api/v1/agents/findByFilter?name=null&operator_number=null&status=${
      e?.target?.value === "all" ? null : e?.target?.value
    }`;

    // const url =
    //   "http://192.168.42.176:2010/api/v1/agents/findByFilter?name=null&operator_number=null&status=null";
    setLoading(true);
    const response = await fetch(sortingUrl);
    const data = await response.json();
    setLatecomers(data);
    setLoading(false);
  };

  return (
    <select className="sorting-latecomers" onChange={handleSelect}>
      <option value="all">Все</option>
      {/* <option value="to-work">Опаздавшие на работу</option> */}
      <option value="block">С перерыва в перерыв</option>
      <option value="time">Превышение перерыва</option>
    </select>
  );
};

export default Sorting;
