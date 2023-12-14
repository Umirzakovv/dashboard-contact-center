/* eslint-disable react/prop-types */
import "./input-with-title.scss";
const InputWithTitle = ({ title, type, color, placeholder }) => {
  return (
    <div className="input-with__title">
      <p>{title}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputWithTitle;
