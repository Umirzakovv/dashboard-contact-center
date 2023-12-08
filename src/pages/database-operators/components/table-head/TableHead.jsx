import "./table-head.scss";
const TableHead = () => {
  const tableHeadData = [
    { id: 1, title: "№" },
    { id: 15, title: "F.I.SH" },

    { id: 2, title: "Xodim toifasi" },
    { id: 3, title: "Tarif razryadi" },
    { id: 4, title: "Ma’lumoti" },
    { id: 5, title: "Tug’ilgan sana" },
    { id: 6, title: "Tel/Uy raqami" },
    { id: 7, title: "Foto surat" },
    { id: 8, title: "Ma’lumotnoma" },
    { id: 9, title: "Mehnat staji" },
    { id: 10, title: "Aloqa sohasiga qabul qilingan sana" },
    { id: 11, title: "Yashash manzil" },
    { id: 12, title: "Tamomlagan muassasa nomi" },
    { id: 13, title: "Lavozimdagi oxirgi o’zgarish" },
  ];

  return (
    <thead>
      <tr className="database-operators__table-head">
        {tableHeadData?.map((item) => {
          return <th key={item?.id}>{item?.title}</th>;
        })}
        <th>Править</th>
      </tr>
    </thead>
  );
};

export default TableHead;
