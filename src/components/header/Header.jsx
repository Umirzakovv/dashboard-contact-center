import Logo from "../logo/Logo";
import SearchBar from "../search-bar/SearchBar";
import "./header.scss";
import Notification from "../notifiaction/Notification";

const Header = () => {
  return (
    <div className="header">
      <div style={{display: "flex", alignItems: "center"}}>
        <Logo />
        <SearchBar placeholder="Поиск" />
      </div>
      <Notification />
    </div>
  );
};

export default Header;
