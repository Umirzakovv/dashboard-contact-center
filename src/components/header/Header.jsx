import Logo from "../logo/Logo";
import SearchBar from "../search-bar/SearchBar";
import "./header.scss";
import NotificationBtn from "../notifiaction-btn/NotificationBtn";

const Header = () => {
  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <SearchBar placeholder="Поиск" />
      </div>
      <NotificationBtn />
    </div>
  );
};

export default Header;
