import { useContext, useEffect } from "react";
import { LateComersListContext, LoadingContext } from "../layout/Layout";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineLock } from "react-icons/ai";
import { formatSecondsToTime } from "../../consts";
import Loader from "../loader/Loader";
import NoData from "../no-data/NoData";

const LatecomersTableData = () => {
  const { latecomers, setLatecomers } = useContext(LateComersListContext);
  const { loading, setLoading } = useContext(LoadingContext);
  // const [err, setError] = useState();
  
  useEffect(() => {
    setLoading(true);
    fetch("http://192.168.42.176:2000/api/v1/agents/all")
    .then((res) => res.json())
    .then((data) => {
      setLatecomers(data);
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
    latecomers?.map((item, index) => {
      return (
        <tr key={item?.agent_id}>
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
          <td>{formatSecondsToTime(+item?.agentStateDuration)}</td>
          <td>{item?.create_data.slice(0, 10)}</td>
        </tr>
      );
    })
  );
};

export default LatecomersTableData;
