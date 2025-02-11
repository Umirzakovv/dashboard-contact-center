import { useState } from "react";
import "./pagination.scss";

const Pagination = () => {
    const url = `http://192.168.42.176:2010/api/v1/agents/allBlock?pageNumber=1&pageSize=10`
  const [lorem, setLorem] = useState(1);
  const [ipsum, setIpsum] = useState(10);

  const handleBtnClick = (e) => {
    console.log(e.target.value);
  };

  const handleSelectChange = (e) => {
      setIpsum(e.target.value);
      console.log(ipsum);
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <button value="1" onClick={handleBtnClick}>
            1
          </button>
        </li>
      </ul>

      <select onChange={handleSelectChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
