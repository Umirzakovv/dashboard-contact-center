const Container = (props) => {
  const containerStyle = {
    // border: "1px solid blue",
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
