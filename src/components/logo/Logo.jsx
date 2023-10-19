import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/logo.jpg";
import "./logo.scss";


const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={LogoImg} alt="logo" />
      <h1>UCC</h1>
    </Link>
  );
};

export default Logo;
