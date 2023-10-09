import Logo from "../logo/Logo";
import SearchBar from "../search-bar/SearchBar";
import "./header.scss";
import Notification from "../notifiaction/Notification";
import Container from "../container/Container";

const Header = () => {
  return (
    <Container className="header">
      <Logo />
      <SearchBar placeholder="Поиск" />
      <Notification />
    </Container>
  );
};

export default Header;
