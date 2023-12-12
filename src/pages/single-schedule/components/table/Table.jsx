import TableDates from "../table-dates/TableDates";
import TableDays from "../table-days/TableDays";
import TableUsers from "../table-users/TableUsers";
import "./table.scss";

const Table = () => {
  return (
    <table className="single-schedule__table">
      <TableDates />
      <TableDays />
      <TableUsers />
      <TableUsers />
      <TableUsers />
      <TableUsers />
      <TableUsers />
    </table>
  );
};

export default Table;
