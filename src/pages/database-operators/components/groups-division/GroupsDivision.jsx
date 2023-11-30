import "./groups-division.scss";

const GroupsDivision = () => {
  const groupsDivisionData = [
    { id: 1, title: "Контакт центр", value: "contact-center" },
    { id: 2, title: "Аутсорсинг", value: "lorem" },
    { id: 3, title: "Уволенные", value: "ipsum" },
    { id: 4, title: "Дети ЦПиО", value: "doloer" },
  ];

  const handleClick = (e) => {
    console.log(e.target?.value);
  };

  return (
    <form className="type-filter" method="get">
      {groupsDivisionData?.map((group) => {
        return (
          <label
            key={group?.id}
            className="type-filter__label"
            onClick={handleClick}
          >
            <input
              defaultChecked
              className="visually-hidden type-filter__radio"
              type="radio"
              name="type"
              value={group?.value}
            />
            <span className="type-filter__styled-radio">{group?.title}</span>
          </label>
        );
      })}
    </form>
  );
};

export default GroupsDivision;
