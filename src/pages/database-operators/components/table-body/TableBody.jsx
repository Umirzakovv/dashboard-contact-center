import { useState } from "react";
import EditBtnBlue from "../../../../components/edit-btn-blue/EditBtnBlue";
import MoreBtnBlue from "../more-btn/MoreBtn";
import MoreBtnModal from "../more-btn-modal/MoreBtnModal";
import EditBtnModal from "../edit-btn-modal/EditBtnModal";
import Curtain from "../../../../components/curtain/Curtain";
import { tableBodyData } from "../../../../mock/mock-data";

import "./table-body.scss";

const TableBody = () => {
  const [isMoreBtnModalOpen, setIsMoreBtnModalOpen] = useState(false);
  const [isEditBtnModalOpen, setIsEditBtnModalOpen] = useState(false);

  const handleEditBtnClick = () => {
    setIsEditBtnModalOpen(true);
  };
  const handleMoreBtnClick = () => {
    setIsMoreBtnModalOpen(true);
  };

  return (
    <>
      <tr className="database-operators__table-data">
        <td>1</td>
        {tableBodyData?.map((item) => {
          return <td key={item?.id}>{item?.title}</td>;
        })}

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
    </>
  );
};

export default TableBody;
