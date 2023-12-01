import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import "./table.scss";

const Table = () => {
  return (
    <table className="database-operators__table">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
