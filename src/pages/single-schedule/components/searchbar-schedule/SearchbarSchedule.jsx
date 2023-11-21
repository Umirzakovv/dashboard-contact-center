import SearchBarLayout from "../../../../components/search-bar-layout/SearchBarLayout";
import img from "../../../../assets/icons/search.svg";
const SearchbarSchedule = () => {
  return (
    <SearchBarLayout
      img={img}
      alt="search icon"
      placeholder="Поиск по ФИО или ID РМО"
      borderColor="#E1E6EF"
    />
  );
};

export default SearchbarSchedule;
