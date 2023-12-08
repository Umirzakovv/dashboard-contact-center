import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import TableTitle from "../table-title/TableTitle";
import "./table.scss";

const Table = () => {
  return (
    <div className="database-operators__group">
      <TableTitle />
      <table className="database-operators__table">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
