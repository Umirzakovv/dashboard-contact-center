import "./latecomers-table.scss";
import { AiFillLock } from "react-icons/ai";

const LatecomersTable = () => {
  return (
    <table className="latecomers-table">
      <tr>
        <th>№</th>
        <th>Ф.И.О</th>
        <th>Номер</th>
        <th>Причина</th>
        <th>Длительность</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Иванов Иван Иванович</td>
        <td>8081</td>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillLock /> &rarr;
          <AiFillLock />
        </td>
        <td>10:32</td>
      </tr>
      <tr>
      <td>2</td>
        <td>Иванов Иван Иванович</td>
        <td>8081</td>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillLock /> &rarr;
          <AiFillLock />
        </td>
        <td>10:32</td>
      </tr>
    </table>
  );
};

export default LatecomersTable;
