import TableBody from "../table-body/TableBody";
import TableHead from "../table-head/TableHead";
import "./table.scss";

const Table = () => {
  return (
    <div className="database-operators__group">
      <h2 className="database-operators__table-title">
        Ekspluatatsiya va xo’jalik ishlari gruruhi
      </h2>
      <table className="database-operators__table">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
