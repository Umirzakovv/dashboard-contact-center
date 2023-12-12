import "./graphic-selection.scss";
const GraphicSelection = () => {
  return (
    <div className="graphic-selection">
      <h4>Выбрать график:</h4>
      <select className="graphic-selection__select">
        <option value="5">5-2</option>
        <option value="2">2-2</option>
        <option value="4">4-1-1-1</option>
        <option value="3">3-1-2-1</option>
        <option value="2">2-1-3-1</option>
        <option value="1">1-1-4-1</option>
      </select>
    </div>
  );
};

export default GraphicSelection;
