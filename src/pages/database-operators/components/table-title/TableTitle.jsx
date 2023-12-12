/* eslint-disable react/prop-types */
import AddWorkerBtn from "../add-worker-btn/AddWorkerBtn";
import "./table-title.scss";

const TableTitle = ({ title }) => {
  return (
    <div className="database-operators__table-title__wrapper">
      <p></p>
      <h2 className="database-operators__table-title">{title}</h2>
      <AddWorkerBtn />
    </div>
  );
};

export default TableTitle;
