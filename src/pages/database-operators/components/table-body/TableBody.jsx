/* eslint-disable react/prop-types */
import { useContext } from "react";
import MoreBtn from "../../../../components/more-btn/MoreBtn";
import EditBtn from "../../../../components/edit-btn/EditBtn";
import editBlueImg from "../../../../assets/icons/pencil-blue.svg";
import moreBlueImg from "../../../../assets/icons/eye-blue.svg";
import "./table-body.scss";
import { Link } from "react-router-dom";
import { DivisionsContext } from "../../DatabaseOperators";

const TableBody = ({
  tableData,
  setTableData,
  setIsMoreBtnModalOpen,
  setIsEditBtnModalOpen,
}) => {
  const { setTargetWorkerData } = useContext(DivisionsContext);
  const handleEditBtnClick = () => {
    setIsEditBtnModalOpen(true);
    setTableData(tableData);
  };

  const handleMoreBtnClick = () => {
    setIsMoreBtnModalOpen(true);
    fetch(`http://192.168.61.169:2004/api/v1/worker/workerOne/${tableData?.id}`)
      .then((res) => res.json())
      .then((data) => setTargetWorkerData(data))
      .catch((err) => console.log(err));
  };

  return (
    <tbody>
      <tr className="database-operators__table-data">
        <td>1</td>
        <td className="database-operators__table-data__name">
          {tableData?.name}
        </td>
        <td>{tableData?.employee_category}</td>
        <td>{tableData?.tariff_discharge}</td>
        <td>{tableData?.information}</td>
        <td>{tableData?.date_of_birth}</td>
        <td>{tableData?.phone_number}</td>
        <td>
          <Link
            to={`http://192.168.42.176:8000/upload/imgs/${tableData?.user_img}`}
            target="_blank"
          >
            Фото
          </Link>
        </td>
        <td>
          <Link
            to={`http://192.168.42.176:8000/upload/imgs/${tableData?.reference_img}`}
            target="_blank"
          >
            Объективка
          </Link>
        </td>
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
  );
};

export default TableBody;
