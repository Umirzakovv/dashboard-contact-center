/* eslint-disable react/prop-types */
import "./add-operatot-select.scss";

const AddOperatorSelect = ({ item }) => {
  return (
    <div className="add-operator__select">
      <p className="add-operator__select-title">{item?.title}</p>
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

export default AddOperatorSelect;
