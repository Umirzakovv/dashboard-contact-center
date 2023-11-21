/* eslint-disable react/prop-types */
import "./search-bar-layout.scss";
const SearchBarLayout = ({
  onSubmit,
  img,
  alt,
  placeholder,
  onChange,
  value,
  borderColor,
}) => {
  return (
    <form
      className="search-bar"
      onSubmit={onSubmit}
      style={{ border: `1px solid ${borderColor}` }}
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
