import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/avatar-cc.jpg";
import "./logo.scss";


const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={LogoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
