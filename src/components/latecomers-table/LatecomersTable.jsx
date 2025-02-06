/* eslint-disable react/prop-types */
import Loader from "../loader/Loader";
import NoData from "../no-data/NoData";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";
import { useContext, useEffect } from "react";
import { LateComersListContext, LoadingContext } from "../layout/Layout";

import "./latecomers-table.scss";

const LatecomersTable = () => {
  const { latecomers, setLatecomers } = useContext(LateComersListContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetch("http://192.168.42.172:2010/api/v1/agents/agents/all")
      .then((res) => res.json())
      .then((data) => {
        setLatecomers(data?.findBlockAgents);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : latecomers?.length <= 0 ? (
    <NoData />
  ) : (
    <table className="latecomers-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Ф.И.О</th>
          <th>ID РМО</th>
          <th>Причина</th>
          <th>Длительность</th>
          <th>Время</th>
        </tr>
      </thead>

      {latecomers?.map((item, index) => {
        return (
          <tbody key={item?.agent_id}>
            <tr>
              <td>{index + 1}</td>
              <td>
                {item?.lastName} {item?.firstName} {item?.secondName}
              </td>
              <td>{item?.login}</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item?.banInfo === "time" ? (
                  <TfiTimer />
                ) : (
                  <>
                    <AiOutlineLock /> &rarr;
                    <AiOutlineLock />
                  </>
                )}
              </td>
              <td>
                {item?.banInfo === "time"
                  ? formatSecondsToTime(+item?.agentStateDuration)
                  : formatSecondsToTime(+item?.agentStateDuration) +
                    " - " +
                    formatSecondsToTime(+item?.lastAgentStateDuration)}{" "}
              </td>
              <td>
                {item?.create_data.slice(11, 16)}
                <br />
                {item?.create_data.slice(8, 10)}-{item?.create_data.slice(5, 7)}
                -{item?.create_data.slice(0, 4)}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default LatecomersTable;
