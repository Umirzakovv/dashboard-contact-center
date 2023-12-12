/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EditBtnBlue from "../../../../components/edit-btn-blue/EditBtnBlue";
import MoreBtnBlue from "../more-btn/MoreBtn";
import MoreBtnModal from "../more-btn-modal/MoreBtnModal";
import EditBtnModal from "../edit-btn-modal/EditBtnModal";
import Curtain from "../../../../components/curtain/Curtain";

import "./table-body.scss";

const TableBody = ({ tableData }) => {
  console.log(tableData);
  const [isMoreBtnModalOpen, setIsMoreBtnModalOpen] = useState(false);
  const [isEditBtnModalOpen, setIsEditBtnModalOpen] = useState(false);

  const handleEditBtnClick = () => {
    setIsEditBtnModalOpen(true);
  };

  const handleMoreBtnClick = () => {
    setIsMoreBtnModalOpen(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMoreBtnModalOpen(false);
      setIsEditBtnModalOpen(false);
    }
  };

  useEffect(() => {
    if (isMoreBtnModalOpen || isEditBtnModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isMoreBtnModalOpen,
    setIsMoreBtnModalOpen,
    isEditBtnModalOpen,
    setIsEditBtnModalOpen,
  ]);

  return (
    <tbody>
      <tr className="database-operators__table-data">
        <td>1</td>
        <td>{tableData?.name}</td>
        <td>{tableData?.employee_category}</td>
        <td>{tableData?.tariff_discharge}</td>
        <td>{tableData?.information}</td>
        <td>{tableData?.date_of_birth}</td>
        <td>{tableData?.phone_number}</td>
        <td>
          <img src={tableData?.user_img} alt="user img" />
        </td>
        <td>{tableData?.name}</td>
        <td>{tableData?.experience}</td>
        <td>{tableData?.date_of_acceptance}</td>
        <td>{tableData?.address}</td>
        <td>{tableData?.name_of_graduate_institution}</td>
        <td>{tableData?.date_of_last_change_position}</td>

        <td className="database-operators__table-data__manage">
          <EditBtnBlue onClick={handleEditBtnClick} />
          <MoreBtnBlue onClick={handleMoreBtnClick} />
        </td>
      </tr>

      {isEditBtnModalOpen ? (
        <>
          <EditBtnModal setIsEditBtnModalOpen={setIsEditBtnModalOpen} />
          <Curtain />
        </>
      ) : (
        ""
      )}

      {isMoreBtnModalOpen ? (
        <>
          <MoreBtnModal setIsMoreBtnModalOpen={setIsMoreBtnModalOpen} />
          <Curtain />
        </>
      ) : (
        ""
      )}
    </tbody>
  );
};

export default TableBody;
