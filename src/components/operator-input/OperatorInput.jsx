/* eslint-disable react/prop-types */
import { useState } from "react";
import operatorImg from "../../assets/icons/operator.svg";
import "./operator-input.scss";
import SearchResultModal from "../search-result-modal/SearchResultModal";

const OperatorInput = ({ placeholder }) => {
  const [result, setResult] = useState(true);
  return (
    <>
      <div className="operator-input__wrapper">
        <h4>Выберите подходящих оператор</h4>
        <div className="operator-input">
          <input type="text" placeholder={placeholder} />
          <img src={operatorImg} alt="user img" />
        </div>
      </div>

      {result ? <SearchResultModal /> : null}
    </>
  );
};

export default OperatorInput;
