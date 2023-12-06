import "./groups-division.scss";

const GroupsDivision = () => {
  const groupsDivisionData = [
    {
      id: 1,
      title: "Контакт центр",
      value: "contact-center",
      defaultChecked: true,
    },
    { id: 2, title: "Аутсорсинг", value: "lorem", defaultChecked: false },
    { id: 3, title: "Уволенные", value: "ipsum", defaultChecked: false },
    { id: 4, title: "Дети ЦПиО", value: "doloer", defaultChecked: false },
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
              className="visually-hidden type-filter__radio"
              type="radio"
              name="type"
              value={group?.value}
              defaultChecked={group?.defaultChecked}
            />
            <span className="type-filter__styled-radio">{group?.title}</span>
          </label>
        );
      })}
    </form>
  );
};

export default GroupsDivision;
