/* eslint-disable react/prop-types */
import EditBtn from "../../../../components/edit-btn/EditBtn";
import DeleteBtnWithTrash from "../../../../components/delete-btn-with-trash/DeleteBtnWithTrash";
import editBtnWhiteImg from "../../../../assets/icons/pencil-white.svg";
import trashImg from "../../../../assets/icons/trash.svg";
import "./table-title.scss";
import { useState } from "react";
import EditTableTitleModal from "../edit-table-title-modal/EditTableTitleModal";
import Curtain from "../../../../components/curtain/Curtain";
import DeleteDepartmentAlert from "../delete-department-alert/DeleteDepartmentAlert";

const TableTitle = ({ title, id }) => {
  const [targetDepartmentId, setTargetDepartmentId] = useState()
  const [isEditTableTitleModalOpen, setIsEditTableTitleModalOpen] =
    useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);

  const handleEditBtnClick = () => {
    setIsEditTableTitleModalOpen(true);
    console.log("ok");
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirmModalOpen(true);
    setTargetDepartmentId(id)
  };
  return (
    <>
      <div className="database-operators__table-title__wrapper">
        <p></p>
        <h2 className="database-operators__table-title">{title}</h2>
        <div className="database-operators__table-title__btns">
          <EditBtn img={editBtnWhiteImg} onClick={handleEditBtnClick} />
          <DeleteBtnWithTrash img={trashImg} onClick={handleDeleteClick}/>
        </div>
      </div>
      {isEditTableTitleModalOpen ? (
        <EditTableTitleModal
          setIsEditTableTitleModalOpen={setIsEditTableTitleModalOpen}
        />
      ) : (
        ""
      )}
      {isEditTableTitleModalOpen ? <Curtain /> : ""}

      {isDeleteConfirmModalOpen ? (
        <DeleteDepartmentAlert
          setIsDeleteConfirmModalOpen={setIsDeleteConfirmModalOpen}
          targetDepartmentId={targetDepartmentId}
        />
      ) : (
        ""
      )}
      {isDeleteConfirmModalOpen ? <Curtain /> : ""}
    </>
  );
};

export default TableTitle;
