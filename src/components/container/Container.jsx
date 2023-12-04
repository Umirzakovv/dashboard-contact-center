/* eslint-disable react/prop-types */
const Container = (props) => {
  const containerStyle = {
    padding: "0 12rem",
  };
  return (
    <div
      {...props}
      className={`container ${props?.className}`}
      style={containerStyle}
    ></div>
  );
};

export default Container;
