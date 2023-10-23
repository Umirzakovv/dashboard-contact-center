import { useEffect, useState } from "react";
import "./latecomers-table.scss";
import { AiFillLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";

const LatecomersTable = () => {
  const [latecomers, setLatecomers] = useState();
  useEffect(() => {
    fetch("http://192.168.0.167:2004/api/v1/agents/all")
      .then((res) => res.json())
      .then((data) => setLatecomers(data));
  }, []);

  return (
    <table className="latecomers-table">
      <tr>
        <th>№</th>
        <th>Ф.И.О</th>
        <th>Номер</th>
        <th>Причина</th>
        <th>Длительность</th>
      </tr>
      {latecomers?.map((item, index) => {
        return (
          <tr key={item?.agent_id}>
            <td>{index + 1}</td>
            <td>{item?.lastName} {item?.firstName} {item?.secondName}</td>
            <td>{item?.login}</td>
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
            <td>{formatSecondsToTime(+item?.agentStateDuration)}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default LatecomersTable;
