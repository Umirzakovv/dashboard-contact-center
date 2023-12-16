/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import EditBtn from "../../../../components/edit-btn/EditBtn";
import DeleteBtnWithTrash from "../../../../components/delete-btn-with-trash/DeleteBtnWithTrash";
import editBtnWhiteImg from "../../../../assets/icons/pencil-white.svg";
import trashImg from "../../../../assets/icons/trash.svg";
import EditTableTitleModal from "../edit-table-title-modal/EditTableTitleModal";
import Curtain from "../../../../components/curtain/Curtain";
import DeleteDepartmentAlert from "../delete-department-alert/DeleteDepartmentAlert";
import AddOperatorBtn from "../add-operator-btn/AddOperatorBtn";

import "./table-title.scss";
import { DivisionsContext } from "../../DatabaseOperators";

const TableTitle = ({ title, id }) => {
  const { setTargetDepartmentId } = useContext(DivisionsContext);
  const [isEditTableTitleModalOpen, setIsEditTableTitleModalOpen] =
    useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);

  const handleEditBtnClick = () => {
    setIsEditTableTitleModalOpen(true);
    setTargetDepartmentId(id);
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirmModalOpen(true);
    setTargetDepartmentId(id);
  };
  return (
    <>
      <div className="database-operators__table-title__wrapper">
        <AddOperatorBtn />
        <h2 className="database-operators__table-title">{title}</h2>
        <div className="database-operators__table-title__btns">
          <EditBtn img={editBtnWhiteImg} onClick={handleEditBtnClick} />
          <DeleteBtnWithTrash img={trashImg} onClick={handleDeleteClick} />
        </div>
      </div>
      {isEditTableTitleModalOpen ? (
        <EditTableTitleModal
          tableTitle={title}
          setIsEditTableTitleModalOpen={setIsEditTableTitleModalOpen}
        />
      ) : (
        ""
      )}
      {isEditTableTitleModalOpen ? <Curtain /> : ""}

      {isDeleteConfirmModalOpen ? (
        <DeleteDepartmentAlert
          setIsDeleteConfirmModalOpen={setIsDeleteConfirmModalOpen}
        />
      ) : (
        ""
      )}
      {isDeleteConfirmModalOpen ? <Curtain /> : ""}
    </>
  );
};

export default TableTitle;
