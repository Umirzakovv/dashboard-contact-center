/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MoreBtn from "../../../../components/more-btn/MoreBtn";
import Curtain from "../../../../components/curtain/Curtain";
import EditBtn from "../../../../components/edit-btn/EditBtn";
import editBlueImg from "../../../../assets/icons/pencil-blue.svg";
import moreBlueImg from "../../../../assets/icons/eye-blue.svg";
import "./table-body.scss";
import MoreInfoWorker from "../more-info-worker-modal/MoreInfoWorkerModal";
import EditWorkerModal from "../edit-worker-modal/EditWorkerModal";
import { Link } from "react-router-dom";

const TableBody = ({ tableData }) => {
  const [isMoreBtnModalOpen, setIsMoreBtnModalOpen] = useState(false);
  const [isEditBtnModalOpen, setIsEditBtnModalOpen] = useState(false);

  const [targetWorkerData, setTargetWorkerData] = useState("");

  const handleEditBtnClick = () => {
    setIsEditBtnModalOpen(true);
  };

  const handleMoreBtnClick = () => {
    setIsMoreBtnModalOpen(true);
    fetch(`http://192.168.61.169:2004/api/v1/worker/workerOne/${tableData?.id}`)
      .then((res) => res.json())
      .then((data) => setTargetWorkerData(data))
      .catch((err) => console.log(err));
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

  return tableData?.IsActive ? (
    <>
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
            <Link to={`http://192.168.42.176:8000/upload/imgs/${tableData?.user_img}`} target="_blank">Фото</Link>
          </td>
          <td>{tableData?.name}</td>
          <td>{tableData?.experience}</td>
          <td>{tableData?.date_of_acceptance}</td>
          <td>{tableData?.address}</td>
          <td>{tableData?.name_of_graduate_institution}</td>
          <td>{tableData?.date_of_last_change_position}</td>

          <td className="database-operators__table-data__manage">
            <EditBtn img={editBlueImg} onClick={handleEditBtnClick} />
            <MoreBtn img={moreBlueImg} onClick={handleMoreBtnClick} />
          </td>
        </tr>
      </tbody>

      {isEditBtnModalOpen ? (
        <>
          <EditWorkerModal
            setIsEditBtnModalOpen={setIsEditBtnModalOpen}
            tableData={tableData}
          />
          <Curtain />
        </>
      ) : (
        ""
      )}

      {isMoreBtnModalOpen ? (
        <>
          <MoreInfoWorker
            setIsMoreBtnModalOpen={setIsMoreBtnModalOpen}
            targetWorkerData={targetWorkerData}
          />
          <Curtain />
        </>
      ) : (
        ""
      )}
    </>
  ) : (
    ""
  );
};

export default TableBody;
