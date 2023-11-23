import { useRef, useState } from "react";
import "./supervisor-input.scss";
import xmark from "../../assets/icons/xmark.svg";

const data = [
  {
    id: 1,
    title: "Abrorov Sardor",
  },
  {
    id: 2,
    title: "Adhamov Muhammad",
  },
  {
    id: 3,
    title: "Ismonov Mirxonjon",
  },
  {
    id: 4,
    title: "Rahimov Farrux",
  },
];

const SupervisorInput = () => {
  return (
    <div className="supervisor-input__wrapper">
      <p className="supervisor-input__title">Имя Супервайзера</p>
      <SearchComponent />
    </div>
  );
};

export default SupervisorInput;

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOperators, setSelectedOperators] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef(null);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const filteredData = data?.filter((item) =>
        item?.title.includes(inputValue)
      );
      setIsActive(true);
      setSearchResults(filteredData);
    }, 500);
  };

  const handleResultClick = (e) => {
    const newOperator = {
      id: selectedOperators.length,
      title: e.target.innerText,
    };

    setSelectedOperators([...selectedOperators, newOperator]);
  };

  return (
    <div className="supervisor-input__searchbar">
      <div className="supervisor-input__search-input">
        
        <div className={`selected-results`}>
          {selectedOperators
            ? selectedOperators?.map((item) => {
                return (
                  <div key={item?.id} className="selected-result">
                    <p>{item?.title}</p>
                    <img src={xmark} alt="xmark icon" />
                  </div>
                );
              })
            : ""}
        </div>

        <input
          type="text"
          ref={timeoutRef}
          placeholder="Поиск супервайзера..."
          value={inputValue}
          onChange={handleSearchChange}
        />
      </div>

      <div
        className={`search-results ${isActive ? "search-results__active" : ""}`}
      >
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              className="search-result"
              key={result.id}
              onClick={handleResultClick}
            >
              <p>{result.title}</p>
              <p>{result.description}</p>
            </div>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};
