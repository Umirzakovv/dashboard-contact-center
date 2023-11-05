import Logo from "../logo/Logo";
import "./header.scss";
import NotificationBtn from "../notifiaction-btn/NotificationBtn";
import Clock from "../clock/Clock";

const Header = () => {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Clock />
        <NotificationBtn />
      </div>
    </header>
  );
};

export default Header;
