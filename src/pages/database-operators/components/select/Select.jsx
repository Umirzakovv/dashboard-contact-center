/* eslint-disable react/prop-types */
import "./select.scss";

const Select = ({ item, value, setSelectValues }) => {
  const handleSelectChange = (e) => {
    console.log(e);
    setSelectValues(e?.target?.value);
  };

  return (
    <div className="extended-filter__select">
      <p className="extended-filter__select-title">{item?.title}</p>
      <select onChange={handleSelectChange} value={value}>
        {item?.options?.map((option) => {
          return (
            <option value={option?.value} key={option?.id}>
              {option?.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
