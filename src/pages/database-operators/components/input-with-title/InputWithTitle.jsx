/* eslint-disable react/prop-types */
import { useState } from "react";
import "./input-with-title.scss";
const InputWithTitle = ({
  title,
  type,
  color,
  placeholder,
  onChange,
  required,
  setName,
  name,
  autoFocus
}) => {
  return (
    <div className="input-with__title">
      <p>
        {title} <span>{required ? "*" : ""}</span>
      </p>
      <label htmlFor={required ? "requiredInput" : ""}>
        <input autoFocus={autoFocus} name={name} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default InputWithTitle;
