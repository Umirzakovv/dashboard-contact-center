import "./table-body.scss";
import pencilImg from "../../../../assets/icons/pencil-blue.svg";
import moreBtnImg from "../../../../assets/icons/eye-blue.svg";

const TableBody = () => {

  const tableBodyData = [
    { id: 1, title: "Ganiyev Raxmatullaxodja Raximxodjayev" },
    { id: 1, title: "ICHP" },
    { id: 1, title: "11" },
    { id: 1, title: "Oliy" },
    { id: 1, title: "27.11.2002" },
    { id: 1, title: "994043301" },
    { id: 1, title: "Фото" },
    { id: 1, title: "Объективка" },
    { id: 1, title: "3,18" },
    { id: 1, title: "21.09.2020" },
    {
      id: 1,
      title:
        "Toshkent shahar, Olmazor tumani, Sag’bon maqola tor ko’chasi, 51-xona",
    },
    { id: 1, title: "Toshkent Axborot Texnologiyalari Universiteti" },
    { id: 1, title: "01.11.2022" },
  ];

  return (
    <tr className="database-operators__table-data">
        <td>1</td>
      {tableBodyData?.map((item) => {
        return <td key={item?.id}>{item?.title}</td>;
      })}

      <td className="database-operators__table-data__manage">
        <button>
          <img src={pencilImg} alt="pencil img" style={{ color: "red" }} />
        </button>
        <button>
          <img src={moreBtnImg} alt="more button" />
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
