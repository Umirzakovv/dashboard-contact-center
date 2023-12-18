/* eslint-disable react/prop-types */
import "./input-with-title.scss";
const InputWithTitle = ({ ...props }) => {
  console.log(props.touched);
  return (
    <>
      <div className="input-with__title">
        <label htmlFor={props?.name}>
          {props.title} {props.required ? "*" : ""}
        </label>
        <input {...props} />
      </div>
      {props.error && props.touched ? (
        <p className={"input-with__title-error"}>{props?.error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default InputWithTitle;
