/* eslint-disable react/prop-types */
import "./select.scss";

const Select = ({ item }) => {
  return (
    <div className="extended-filter__select">
      <p className="extended-filter__select-title">{item?.title}</p>
      <select>
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
