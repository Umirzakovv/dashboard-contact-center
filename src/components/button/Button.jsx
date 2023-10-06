import "./button.scss";

const Button = (props) => {
  return <button {...props} className={`btn ${props.className}`}>{props.title}</button>;
};

export default Button;
