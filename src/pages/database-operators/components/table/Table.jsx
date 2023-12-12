import { useContext } from "react";
import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import TableTitle from "../table-title/TableTitle";
import "./table.scss";
import { TargetDivisionContext } from "../../DatabaseOperators";

const Table = () => {
  const { workers } = useContext(TargetDivisionContext);
  const departments = workers?.map((i) => i.departments)[0];
  return departments?.map((item) => {
    return (
      <div className="database-operators__group" key={item?.id}>
        <TableTitle title={item?.title} />
        <table className="database-operators__table">
          <TableHead />
          {item?.workers.map((worker) => {
            return <TableBody key={worker?.id} tableData={worker} />;
          })}
        </table>
      </div>
    );
  });
};

export default Table;
