import "./select-date-input.scss";

const SelectDateInput = () => {
  return (
    <div className="select-date__input-wrapper">
      <h4>Выбрать дату:</h4>

      <div className="select-date__input-checkboxes">
        <label>
          Рабочие дни
          <input type="radio" />
        </label>
        <label>
          Дни отдыха
          <input type="radio" />
        </label>
      </div>
      <table className="select-date__input-calendar">
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пт</th>
          <th>сб</th>
          <th>вс</th>
        </tr>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
        </tr>
      </table>
    </div>
  );
};

export default SelectDateInput;
