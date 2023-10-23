/* eslint-disable react/prop-types */
import searchIcon from "../../assets/icons/search.svg";
import "./search-bar.scss";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="search icon" />
      <input type="search" placeholder={props.placeholder} />
    </div>
  );
};

export default SearchBar;
