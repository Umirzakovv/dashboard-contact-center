/* eslint-disable react/prop-types */
import "./sorting.scss";

const Sorting = () => {
  return (
    <select className="sorting-latecomers">
      <option value="all">Опаздавшие на работу</option>
      <option value="all">С перерыва в перерыв</option>
      <option value="all">Превышение перерыва</option>
    </select>
  );
};

export default Sorting;
