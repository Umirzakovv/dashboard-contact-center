/* eslint-disable react/prop-types */
import { useState } from "react";
import "./division-modal.scss";
import EditDivisionModal from "../edit-division-modal/EditDivisionModal";
import DeleteDivisionAlert from "../delete-division-alert/DeleteDivisionAlert";
import Curtain from "../../../../components/curtain/Curtain";

const DivisionModal = ({ group, setIsDivisionModalOpen }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div className="division-modal">
        <p onClick={handleEditClick}>Изменить</p>
        <p onClick={handleDeleteClick}>Удалить</p>
      </div>

      {isEditModalOpen ? (
        <EditDivisionModal
          group={group}
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDivisionModalOpen={setIsDivisionModalOpen}
        />
      ) : (
        ""
      )}
      {isDeleteModalOpen ? (
        <DeleteDivisionAlert
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          group={group}
        />
      ) : (
        ""
      )}
      {isEditModalOpen ? <Curtain /> : ""}
      {isDeleteModalOpen ? <Curtain /> : ""}
    </>
  );
};

export default DivisionModal;
