import SearchBarLayout from "../../../../components/search-bar-layout/SearchBarLayout";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <SearchBarLayout placeholder="Поиск по ФИО или ID РМО"/>
    </div>
  );
};

export default Header;
