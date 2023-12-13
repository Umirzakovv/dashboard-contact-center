/* eslint-disable react/prop-types */
import EditBtn from "../../../../components/edit-btn/EditBtn";
import AddBtn from "../add-btn/AddBtn";
import editBtnWhiteImg from "../../../../assets/icons/pencil-white.svg";
import "./table-title.scss";

const TableTitle = ({ title }) => {
  const handleEditBtnClick = () => {
    console.log("ok");
  };
  return (
    <div className="database-operators__table-title__wrapper">
      <p></p>
      <h2 className="database-operators__table-title">{title}</h2>
      <div className="database-operators__table-title__btns">
        <AddBtn />
        <EditBtn img={editBtnWhiteImg} onClick={handleEditBtnClick} />
      </div>
    </div>
  );
};

export default TableTitle;
