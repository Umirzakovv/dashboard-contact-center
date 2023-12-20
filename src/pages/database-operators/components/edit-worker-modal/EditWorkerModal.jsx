/* eslint-disable react/prop-types */

import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import CancelBtn from "../../../../components/cancel-btn/CancelBtn";
import SubmitBtn from "../../../../components/submit-btn/SubmitBtn";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData, formatDateString } from "../../../../consts";
import "./edit-worker-modal.scss";
import InputWithTitle from "../input-with-title/InputWithTitle";
import { useFormik } from "formik";
import {
  degreeStatusData,
  employeeCategory,
  gender,
  jobTitles,
} from "../../../../consts/consts";
import AddOperatorSelect from "../add-operatot-select/AddOperatorSelect";
import DeleteBtn from "../../../../components/delete-btn/DeleteBtn";

const EditWorkerModal = ({ tableData, setIsEditBtnModalOpen }) => {
  const { targetDepartmentId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);
  const { targetDivisionId } = useContext(DivisionsContext);

  const modalRef = useRef();
  const fetchUrl = `http://192.168.61.169:2004/api/v1/worker/update/${tableData?.id}`;

  const [inputValues, setInputValues] = useState({
    name: tableData?.name,
    login: tableData?.login,
    employee_category: tableData?.employee_category,
    tariff_discharge: tableData?.tariff_discharge,
    job_titles: tableData?.job_titles,
    information: tableData?.information,
    date_of_birth: tableData?.date_of_birth,
    Pasport_id: tableData?.Pasport_id,
    pinfl: tableData?.pinfl,
    date_of_last_change_position: tableData?.date_of_last_change_position,
    phone_number: tableData?.phone_number,
    about_family: tableData?.about_family,
    gender: tableData?.gender,
    date_of_acceptance: tableData?.date_of_acceptance,
    address: tableData?.address,
    name_of_graduate_institution: tableData?.name_of_graduate_institution,
    user_img: tableData?.user_img,
    reference_img: tableData?.reference_img,
    military_ID_img: tableData?.military_ID_img,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      e.target.type === "date" ? formatDateString(value) : value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };

  const handleConfirmClick = async () => {
    console.log(inputValues);
    try {
      const formData = new FormData();

      formData.append("department_id", targetDepartmentId);
      formData.append("name", inputValues.name);
      formData.append("login", inputValues.login);
      formData.append("employee_category", inputValues.employee_category);
      formData.append("tariff_discharge", inputValues.tariff_discharge);
      formData.append("job_titles", inputValues.job_titles);
      formData.append("information", inputValues.information);
      formData.append("date_of_birth", inputValues.date_of_birth);
      formData.append("Pasport_id", inputValues.Pasport_id);
      formData.append("pinfl", inputValues.pinfl);
      formData.append(
        "date_of_last_change_position",
        inputValues.date_of_last_change_position
      );
      formData.append("phone_number", inputValues.phone_number);
      formData.append("about_family", inputValues.about_family);
      formData.append("gender", inputValues.gender);
      formData.append("date_of_acceptance", inputValues.date_of_acceptance);
      formData.append("address", inputValues.address);
      formData.append(
        "name_of_graduate_institution",
        inputValues.name_of_graduate_institution
      );

      // Append file data
      formData.append("user_img", inputValues.user_img);
      formData.append("reference_img", inputValues.reference_img);
      formData.append("military_ID_img", inputValues.military_ID_img);
      const response = await fetch(fetchUrl, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        console.log(response);
        fetchSingleDivisionData(targetDivisionId, setWorkers);
      }
    } catch (error) {
      console.log("Error lorem fetching data:", error);
    } finally {
      setIsEditBtnModalOpen(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsEditBtnModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleDeleteClick = async () => {
    const deleteWorkerUrl = `http://192.168.61.169:2004/api/v1/worker/delete/${tableData?.id}`;

    try {
      const response = await fetch(deleteWorkerUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        console.log(response);
        fetchSingleDivisionData(targetDivisionId, setWorkers);
      }
    } catch (error) {
      console.log("Error lorem fetching data:", error);
    } finally {
      setIsEditBtnModalOpen(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditBtnModalOpen(false);
  };

  return (
    <div className="edit-worker__modal" ref={modalRef}>
      <h2 className="edit-worker__modal-title">Изенить сотрудника</h2>
      <div className="edit-worker__modal-inputs">
        <div className="edit-worker__modal-left">
          <InputWithTitle
            type="text"
            id="name"
            name="name"
            value={inputValues?.name}
            onChange={handleInputChange}
            title="F.I.SH"
          />
          {gender?.map((item) => {
            return (
              <AddOperatorSelect
                id="gender"
                name="gender"
                key={item?.id}
                item={item}
                value={inputValues?.gender}
                onChange={handleInputChange}
              />
            );
          })}
          <InputWithTitle
            value={inputValues?.date_of_birth}
            onChange={handleInputChange}
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            placeholder="Напишите..."
            title="Tug’ilgan sana"
          />
          <InputWithTitle
            value={inputValues?.address}
            onChange={handleInputChange}
            id="address"
            name="address"
            type="text"
            placeholder="Напишите..."
            title="Yashash manzili"
          />
          <InputWithTitle
            value={inputValues?.phone_number}
            onChange={handleInputChange}
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder="Напишите..."
            title="Tel/Uy raqami"
          />
          <InputWithTitle
            value={inputValues?.login}
            onChange={handleInputChange}
            id="login"
            name="login"
            type="text"
            placeholder="Напишите..."
            title="ID РМО"
          />
          <InputWithTitle
            value={inputValues?.tariff_discharge}
            onChange={handleInputChange}
            id=""
            name="tariff_discharge"
            type="text"
            placeholder="Напишите..."
            title="Razryadi"
          />
          <InputWithTitle
            value={inputValues?.Pasport_id}
            onChange={handleInputChange}
            id="Pasport_id"
            name="Pasport_id"
            type="text"
            placeholder="Напишите..."
            title="Pasport seriya"
          />
          <InputWithTitle
            value={inputValues?.pinfl}
            onChange={handleInputChange}
            id="pinfl"
            name="pinfl"
            type="text"
            placeholder="Напишите..."
            title="ПИНФЛ"
          />
          <InputWithTitle
            value={inputValues?.date_of_acceptance}
            onChange={handleInputChange}
            id="date_of_acceptance"
            name="date_of_acceptance"
            type="date"
            placeholder="Напишите..."
            title="Aloqa sohasiga qabul qilingan sana"
          />
          <InputWithTitle
            value={inputValues?.name_of_graduate_institution}
            onChange={handleInputChange}
            id="name_of_graduate_institution"
            name="name_of_graduate_institution"
            type="text"
            placeholder="Напишите..."
            title="Tamomlagan muassasa nomi"
          />
        </div>
        <hr />
        <div className="edit-worker__modal-right">
          <InputWithTitle
            value={inputValues?.about_family}
            onChange={handleInputChange}
            id="about_family"
            name="about_family"
            type="text"
            placeholder="Напишите..."
            title="Oila haqida ma’lumot"
          />
          <InputWithTitle
            value={inputValues?.date_of_last_change_position}
            onChange={handleInputChange}
            id="date_of_last_change_position"
            name="date_of_last_change_position"
            type="date"
            placeholder="Напишите..."
            title="Lavozimdagi oxirgi o’zgarish"
          />

          {/* {gender?.map((item) => {
            return (
              <AddOperatorSelect
                id="gender"
                name="gender"
                key={item?.id}
                item={item}
                value={inputValues?.gender}
                onChange={handleInputChange}
              />
            )} */}
          {degreeStatusData?.map((item) => {
            return (
              <AddOperatorSelect
                id="information"
                name="information"
                key={item?.id}
                item={item}
                value={inputValues?.gender}
                onChange={handleInputChange}
              />
            );
          })}
          {employeeCategory?.map((item) => {
            return (
              <AddOperatorSelect
                id="employee_category"
                name="employee_category"
                key={item?.id}
                item={item}
                value={inputValues?.gender}
                onChange={handleInputChange}
              />
            );
          })}

          {jobTitles?.map((item) => {
            return (
              <AddOperatorSelect
                id="job_titles"
                name="job_titles"
                key={item?.id}
                item={item}
                value={inputValues?.gender}
                onChange={handleInputChange}
              />
            );
          })}
          <InputWithTitle
            id="user_img"
            name="user_img"
            type="file"
            title="Xodim fotosurati"
            onChange={(event) => handleImageUpload(event, "user_img")}
          />

          <InputWithTitle
            id="reference_img"
            name="reference_img"
            type="file"
            title="Ma’lumotnoma"
            onChange={(event) => handleImageUpload(event, "reference_img")}
          />
          <InputWithTitle
            id="military_ID_img"
            name="military_ID_img"
            type="file"
            title="Harbiy guvohnoma"
            onChange={(event) => handleImageUpload(event, "military_ID_img")}
          />
        </div>
      </div>
      <div className="edit-worker__modal-btns">
        <CancelBtn title="Отменить" onClick={handleCancelClick} />
        <DeleteBtn title="Уволить" onClick={handleDeleteClick} />
        <SubmitBtn title="Изменить" onClick={handleConfirmClick} />
      </div>
    </div>
  );
};

export default EditWorkerModal;
