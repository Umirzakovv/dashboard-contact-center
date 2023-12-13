/* eslint-disable react/prop-types */
import EditBtn from "../../../../components/edit-btn/EditBtn";
import DeleteBtnWithTrash from "../../../../components/delete-btn-with-trash/DeleteBtnWithTrash";
import editBtnWhiteImg from "../../../../assets/icons/pencil-white.svg";
import trashImg from "../../../../assets/icons/trash.svg";
import "./table-title.scss";

const TableTitle = ({ title }) => {
  const handleEditBtnClick = () => {
    console.log("ok");
  };

  const handleDeleteClick = () => {};
  return (
    <div className="database-operators__table-title__wrapper">
      <p></p>
      <h2 className="database-operators__table-title">{title}</h2>
      <div className="database-operators__table-title__btns">
        <EditBtn img={editBtnWhiteImg} onClick={handleEditBtnClick} />
        <DeleteBtnWithTrash img={trashImg} onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default TableTitle;
