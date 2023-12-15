/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import InputWithTitle from "../input-with-title/InputWithTitle";
import "./add-worker-modal.scss";
import {
  degreeStatusData,
  employeeCategory,
  gender,
  jobTitles,
} from "../../../../mock/mock-data";
import AddOperatorSelect from "../add-operatot-select/AddOperatorSelect";

const AddWorkerModal = ({ setisAddOperatorModalOpen }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setisAddOperatorModalOpen(false);
  };

  return (
    <form className="add-operator__modal" onSubmit={handleFormSubmit}>
      <h2 className="add-operator__modal-title">Добавить сотрудника</h2>
      <div className="add-operator__modal-inputs">
        <div className="add-operator__modal-left">
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="F.I.SH"
          />
          {gender?.map((item) => {
            return <AddOperatorSelect key={item?.id} item={item} />;
          })}
          <InputWithTitle
            type="date"
            placeholder="Напишите..."
            title="Tug’ilgan sana"
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Yashash manzili"
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Tel/Uy raqami"
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Razryadi"
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Pasport seriya"
          />
          <InputWithTitle type="text" placeholder="Напишите..." title="ПИНФЛ" />
          <InputWithTitle
            type="date"
            placeholder="Напишите..."
            title="Aloqa sohasiga qabul qilingan sana"
          />
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Tamomlagan muassasa nomi"
          />
        </div>
        <hr />
        <div className="add-operator__modal-right">
          <InputWithTitle
            type="text"
            placeholder="Напишите..."
            title="Oila haqida ma’lumot"
          />
          <InputWithTitle
            type="date"
            placeholder="Напишите..."
            title="Lavozimdagi oxirgi o’zgarish"
          />
          {degreeStatusData?.map((item) => {
            return <AddOperatorSelect key={item?.id} item={item} />;
          })}
          {employeeCategory?.map((item) => {
            return <AddOperatorSelect key={item?.id} item={item} />;
          })}

          {jobTitles?.map((item) => {
            return <AddOperatorSelect key={item?.id} item={item} />;
          })}
          <InputWithTitle
            type="file"
            placeholder="Напишите..."
            title="Xodim fotosurati"
          />
          <InputWithTitle
            type="file"
            placeholder="Напишите..."
            title="Ma’lumotnoma"
          />
          <InputWithTitle
            type="file"
            placeholder="Напишите..."
            title="Harbiy guvohnoma"
          />
        </div>
      </div>
      <div className="add-operator__modal-btns">
        <CancelBtn title="Отменить" onClick={handleCancelClick} />
        <SubmitBtn title="Добавить" />
      </div>
    </form>
  );
};

export default AddWorkerModal;
