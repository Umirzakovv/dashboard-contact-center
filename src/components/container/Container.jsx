const Container = (props) => {
  const containerStyle = {
    border: "1px solid red",
    margin: "0 12px",
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
