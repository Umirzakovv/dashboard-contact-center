/* eslint-disable react/prop-types */
import "./add-operatot-select.scss";

const AddOperatorSelect = ({ ...props }) => {
  return (
    <>
      <div className="add-operator__select">
        <p className="add-operator__select-title">{props?.item?.title}</p>
        <select {...props}>
          {props?.item?.options?.map((option) => {
            return (
              <option value={option?.value} key={option?.id}>
                {option?.title}
              </option>
            );
          })}
        </select>
      </div>
      <p>{props?.error}</p>
    </>
  );
};

export default AddOperatorSelect;
