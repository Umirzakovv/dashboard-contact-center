/* eslint-disable react/prop-types */
import plusImg from "../../../../assets/icons/plus-white.svg";
import "./table-title.scss";

const TableTitle = ({ title }) => {
  return (
    <div className="database-operators__table-title__wrapper">
      <p></p>
      <h2 className="database-operators__table-title">{title}</h2>
      <button className="department-add__btn">
        <img src={plusImg} alt="add division button" />
      </button>
    </div>
  );
};

export default TableTitle;
