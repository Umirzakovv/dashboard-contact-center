const Container = (props) => {
  const containerStyle = {
    // border: "1px solid blue",
    padding: "0 50px",
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
