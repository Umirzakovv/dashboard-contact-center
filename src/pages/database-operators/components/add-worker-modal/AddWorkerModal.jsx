/* eslint-disable react/prop-types */
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import InputWithTitle from "../input-with-title/InputWithTitle";
import * as yup from "yup";
import "./add-worker-modal.scss";
import {
  degreeStatusData,
  employeeCategory,
  gender,
  jobTitles,
} from "../../../../mock/mock-data";
import AddOperatorSelect from "../add-operatot-select/AddOperatorSelect";
import { useContext, useState } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData } from "../../../../consts";

const AddWorkerModal = ({ setisAddOperatorModalOpen }) => {
  const createWorkerUrl = "http://192.168.61.169:2004/api/v1/worker/create";
  const { targetDivisionId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);
  const { targetDepartmentId } = useContext(DivisionsContext);

  const [workerGender, setWorkerGender] = useState();
  const [workerCategory, setWorkerCategory] = useState();
  const [workerJobTitle, setWorkerJobTitle] = useState();

  const [degreeStatus, setDegreeStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(targetDepartmentId);
    const form = e.currentTarget;

    fetch(createWorkerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        department_id: targetDepartmentId,
        name: form.elements.namedItem("fullname")?.value,
        login: form.elements.namedItem("id_rmo")?.value,
        employee_category: workerCategory,
        tariff_discharge: form.elements.namedItem("discharge")?.value,
        job_titles: workerJobTitle,
        information: degreeStatus,
        date_of_birth: form.elements.namedItem("date_of_birth")?.value,
        Pasport_id: form.elements.namedItem("pasport_id")?.value,
        pinfl: form.elements.namedItem("pinfl")?.value,
        date_of_last_change_position: form.elements.namedItem(
          "date_of_last_change_position"
        )?.value,
        phone_number: form.elements.namedItem("phone_number")?.value,
        about_family: form.elements.namedItem("about_family")?.value,
        gender: workerGender,
        date_of_acceptance:
          form.elements.namedItem("date_of_acceptance")?.value,
        address: form.elements.namedItem("address")?.value,
        name_of_graduate_institution: form.elements.namedItem(
          "name_of_graduate_institution"
        )?.value,
      },
    })
      .then((res) => {
        if (res?.ok) {
          fetchSingleDivisionData(targetDivisionId, setWorkers);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleCancelClick = (e) => {
    e.preventDefault();
    setisAddOperatorModalOpen(false);
  };

  return (
    <form className="add-operator__modal" onSubmit={handleSubmit}>
      <h2 className="add-operator__modal-title">Добавить сотрудника</h2>
      <div className="add-operator__modal-inputs">
        <div className="add-operator__modal-left">
          <InputWithTitle
            name="fullname"
            type="text"
            placeholder="Напишите..."
            title="F.I.SH"
            autoFocus={true}
          />
          {gender?.map((item) => {
            return (
              <AddOperatorSelect
                key={item?.id}
                item={item}
                setState={setWorkerGender}
              />
            );
          })}
          <InputWithTitle
            name="date_of_birth"
            type="date"
            placeholder="Напишите..."
            title="Tug’ilgan sana"
          />
          <InputWithTitle
            name="address"
            type="text"
            placeholder="Напишите..."
            title="Yashash manzili"
          />
          <InputWithTitle
            name="phone_number"
            type="text"
            placeholder="Напишите..."
            title="Tel/Uy raqami"
          />
          <InputWithTitle
            name="id_rmo"
            type="text"
            placeholder="Напишите..."
            title="ID рмо"
          />
          <InputWithTitle
            name="discharge"
            type="text"
            placeholder="Напишите..."
            title="Razryadi"
          />
          <InputWithTitle
            name="pasport_id"
            type="text"
            placeholder="Напишите..."
            title="Pasport seriya"
          />
          <InputWithTitle
            name="pinfl"
            type="text"
            placeholder="Напишите..."
            title="ПИНФЛ"
          />
          <InputWithTitle
            name="date_of_acceptance"
            type="date"
            placeholder="Напишите..."
            title="Aloqa sohasiga qabul qilingan sana"
          />
          <InputWithTitle
            name="name_of_graduate_institution"
            type="text"
            placeholder="Напишите..."
            title="Tamomlagan muassasa nomi"
          />
        </div>
        <hr />
        <div className="add-operator__modal-right">
          <InputWithTitle
            name="about_family"
            type="text"
            placeholder="Напишите..."
            title="Oila haqida ma’lumot"
          />
          <InputWithTitle
            name="date_of_last_change_position"
            type="date"
            placeholder="Напишите..."
            title="Lavozimdagi oxirgi o’zgarish"
          />
          {degreeStatusData?.map((item) => {
            return (
              <AddOperatorSelect
                key={item?.id}
                item={item}
                setState={setDegreeStatus}
              />
            );
          })}
          {employeeCategory?.map((item) => {
            return (
              <AddOperatorSelect
                key={item?.id}
                item={item}
                setState={setWorkerCategory}
              />
            );
          })}

          {jobTitles?.map((item) => {
            return (
              <AddOperatorSelect
                key={item?.id}
                item={item}
                setState={setWorkerJobTitle}
              />
            );
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
