import { useContext } from "react";
import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import TableTitle from "../table-title/TableTitle";
import "./table.scss";
import { TargetDivisionContext } from "../../DatabaseOperators";

const Table = () => {
  const { workers, setWorkers } = useContext(TargetDivisionContext);
  const departments = workers?.map((i) => i.departments)[0];
  const workerss = departments?.map((i) => i.workers)[0];
  return departments?.map((item) => {
    console.log(item.workers);
    return (
      <div className="database-operators__group" key={item?.id}>
        <TableTitle title={item?.title}/>
        <table className="database-operators__table">
          <TableHead />
          <TableBody tableData={item.workers}/>
        </table>
      </div>
    );
  });
};

export default Table;
