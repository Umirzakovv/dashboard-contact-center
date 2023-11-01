/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { LateComersListContext, LoadingContext } from "../layout/Layout";

import searchIcon from "../../assets/icons/search.svg";
import "./search-bar.scss";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { setLatecomers } = useContext(LateComersListContext);
  const { setLoading } = useContext(LoadingContext);

  const filterById = `http://192.168.0.167:2004/api/v1/agents/findByFilter?name=null&operator_number=${
    inputValue?.trim() || null
  }&status=null`;
  const filterByName = `http://192.168.0.167:2004/api/v1/agents/findByFilter?name=${
    inputValue?.trim() || null
  }&operator_number=null&status=null`;

  const handleChange = (e) => {
    setInputValue(e.target?.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      !isNaN(+inputValue) ? filterById : filterByName
    );
    const data = await response.json();
    setLatecomers(data);
    setLoading(false);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <img src={searchIcon} alt="search icon" />
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
