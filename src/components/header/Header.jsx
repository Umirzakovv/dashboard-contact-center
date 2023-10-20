import Logo from "../logo/Logo";
import SearchBar from "../search-bar/SearchBar";
import "./header.scss";
import NotificationBtn from "../notifiaction-btn/NotificationBtn";
import Clock from "../clock/Clock";
import Wheather from "../wheather/Wheather";

const Header = () => {
  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <SearchBar placeholder="Поиск" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Wheather />
        <Clock />
        <NotificationBtn />
      </div>
    </div>
  );
};

export default Header;
