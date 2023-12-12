import plusImg from "../../../../assets/icons/plus.svg";
import "./add-department-btn.scss";
const AddDepartmentBtn = () => {
  return (
    <button className="add-department-btn">
      Добавить новую группу
      <img src={plusImg} alt="plus img" />
    </button>
  );
};

export default AddDepartmentBtn;
