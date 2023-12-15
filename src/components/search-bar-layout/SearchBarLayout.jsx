/* eslint-disable react/prop-types */
import "./search-bar-layout.scss";

const SearchBarLayout = ({
  onSubmit,
  img,
  alt,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <form
      className="search-bar"
      onSubmit={onSubmit}
    >
      <img src={img} alt={alt} />
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default SearchBarLayout;
