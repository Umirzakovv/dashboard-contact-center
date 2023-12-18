/* eslint-disable react/prop-types */
import "./add-operatot-select.scss";

const AddOperatorSelect = ({error, item, setState }) => {
  const handleSelectChange = (e) => {
    setState(e?.target.value);
  };
  return (
    <>
      <div className="add-operator__select">
        <p className="add-operator__select-title">{item?.title}</p>
        <select onChange={handleSelectChange}>
          {item?.options?.map((option) => {
            return (
              <option value={option?.value} key={option?.id}>
                {option?.title}
              </option>
            );
          })}
        </select>
      </div>
      <p>{error}</p>
    </>
  );
};

export default AddOperatorSelect;
