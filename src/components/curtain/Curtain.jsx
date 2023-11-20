const Curtain = () => {
    
  const style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: " rgba(0, 0, 0, 0.50)",
    zIndex: 1,
  };
  return <div style={style}></div>;
};

export default Curtain;
