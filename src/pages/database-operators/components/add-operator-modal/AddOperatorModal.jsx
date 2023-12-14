import InputWithTitle from "../input-with-title/InputWithTitle";
import "./add-operator-modal.scss";

const AddOperatorModal = () => {
  return (
    <form className="add-operator__modal">
      <div className="add-operator__modal-left">
        <InputWithTitle
          type="text"
          placeholder="Напишите..."
          title="Bo’lim nomi "
        />
      </div>
      <hr />
      <div className="add-operator__modal-right">
        <InputWithTitle
          type="text"
          placeholder="Напишите..."
          title="Bo’lim nomi"
        />
      </div>
    </form>
  );
};

export default AddOperatorModal;
