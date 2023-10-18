import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/logo.jpg";
import "./logo.scss";


const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={LogoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
