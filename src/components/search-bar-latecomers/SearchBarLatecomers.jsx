/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { LateComersListContext, LoadingContext } from "../layout/Layout";
import searchIcon from "../../assets/icons/search.svg";
import SearchBarLayout from "../search-bar-layout/SearchBarLayout";

const MAX_COUNT = 9;

const SearchBarLatecomers = () => {
  const [inputValue, setInputValue] = useState("");
  const { setLatecomers } = useContext(LateComersListContext);
  const { setLoading } = useContext(LoadingContext);

  const filterById = `http://192.168.42.172:2010/api/v1/agents/findByFilter?name=null&operator_number=${
    inputValue?.trim() || null
  }&status=null`;
  const filterByName = `http://192.168.42.172:2010/api/v1/agents/findByFilter?name=${
    inputValue?.trim() || null
  }&operator_number=null&status=null`;

  const handleChange = (e) => {
    if (!isNaN(+inputValue) && MAX_COUNT - e?.target?.value?.length >= 0) {
      setInputValue(e.target?.value);
    } else if (isNaN(+inputValue)) {
      setInputValue(e?.target?.value);
    } else {
      return null;
    }
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
    <SearchBarLayout
      onSubmit={handleSearchSubmit}
      img={searchIcon}
      alt="search icon"
      placeholder="Поиск по ФИО или ID РМО"
      onChange={handleChange}
      value={inputValue}
    />
  );
};

export default SearchBarLatecomers;
