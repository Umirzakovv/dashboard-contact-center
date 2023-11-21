import "./table-users.scss";
import pencilImg from "../../../../assets/icons/pencil.svg";

const TableUsers = () => {
  return (
    <tr className="table-user">
      <td>1</td>
      <td className="user-name">Шавкатов <br /> Камолиддин</td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>
      <td>08-20</td>
      <td></td>
      <td></td>
      <td>08-20</td>

      <td>
        <button className="user-edit__btn">
          <img src={pencilImg} alt="edit btn" />
        </button>
      </td>
    </tr>
  );
};

export default TableUsers;
