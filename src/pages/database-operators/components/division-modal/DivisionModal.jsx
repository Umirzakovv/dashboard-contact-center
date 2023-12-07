/* eslint-disable react/prop-types */
import { useState } from "react";
import "./division-modal.scss";
import EditDivisionModal from "../edit-division-modal/EditDivisionModal";
import DeleteDivisionAlert from "../delete-division-alert/DeleteDivisionAlert";

const DivisionModal = ({ group }) => {
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
          setIsEditModalOpen={setIsEditModalOpen}
          group={group}
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
    </>
  );
};

export default DivisionModal;
