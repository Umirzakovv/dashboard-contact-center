/* eslint-disable react/prop-types */
import "./latecomers-table.scss";
import LatecomersTableData from "../latecomers-table-data/LatecomersTableData";

const LatecomersTable = () => {
  return (
    <table className="latecomers-table">
      <tr>
        <th>№</th>
        <th>Ф.И.О</th>
        <th>ID РМО</th>
        <th>Причина</th>
        <th>Длительность</th>
        <th>Время</th>
      </tr>
      <LatecomersTableData />
    </table>
  );
};

export default LatecomersTable;
