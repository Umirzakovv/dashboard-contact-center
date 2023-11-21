import addImg from "../../../../assets/icons/plus.svg";
import "./add-group-btn.scss";
const AddGroupBtn = () => {
  return (
    <button className="shchedule-add__group-btn">
      <img src={addImg} alt="add img" />
      Добавить Группу
    </button>
  );
};

export default AddGroupBtn;
