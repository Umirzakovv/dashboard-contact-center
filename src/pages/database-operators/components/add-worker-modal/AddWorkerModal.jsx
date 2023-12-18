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
} from "../../../../consts/consts";
import AddOperatorSelect from "../add-operatot-select/AddOperatorSelect";
import { useContext, useEffect, useRef, useState } from "react";
import { DivisionsContext } from "../../DatabaseOperators";
import { fetchSingleDivisionData } from "../../../../consts";

import { addOperatorModalFormSchemas } from "../../../../form-schemas/index";
import { useFormik } from "formik";

const AddWorkerModal = ({ setisAddOperatorModalOpen }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setisAddOperatorModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const { targetDepartmentId } = useContext(DivisionsContext);
  const { setWorkers } = useContext(DivisionsContext);
  const { targetDivisionId } = useContext(DivisionsContext);
  const [workerGender, setWorkerGender] = useState("male");
  const [workerCategory, setWorkerCategory] = useState("MBP");
  const [workerJobTitle, setWorkerJobTitle] = useState("Direktor");
  const [degreeStatus, setDegreeStatus] = useState("Oliy");

  const onSubmit = async (values) => {
    const fetchUrl = "http://192.168.61.169:2004/api/v1/worker/create";
    try {
      const formData = new FormData();

      formData.append("department_id", values.department_id);
      formData.append("name", values.name);
      formData.append("login", values.login);
      formData.append("employee_category", values.employee_category);
      formData.append("tariff_discharge", values.tariff_discharge);
      formData.append("job_titles", values.job_titles);
      formData.append("information", values.information);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("Pasport_id", values.Pasport_id);
      formData.append("pinfl", values.pinfl);
      formData.append(
        "date_of_last_change_position",
        values.date_of_last_change_position
      );
      formData.append("phone_number", values.phone_number);
      formData.append("about_family", values.about_family);
      formData.append("gender", values.gender);
      formData.append("date_of_acceptance", values.date_of_acceptance);
      formData.append("address", values.address);
      formData.append(
        "name_of_graduate_institution",
        values.name_of_graduate_institution
      );

      // Append file data
      formData.append("user_img", values.user_img);
      formData.append("reference_img", values.reference_img);
      formData.append("military_ID_img", values.military_ID_img);

      const response = await fetch(fetchUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        fetchSingleDivisionData(targetDivisionId, setWorkers);
      }
    } catch (error) {
      console.log("Error lorem fetching data:", error);
    } finally {
      setisAddOperatorModalOpen(false);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      department_id: targetDepartmentId,
      name: "",
      login: "",
      employee_category: workerCategory,
      tariff_discharge: "",
      job_titles: workerJobTitle,
      information: degreeStatus,
      date_of_birth: "",
      Pasport_id: "",
      pinfl: "",
      date_of_last_change_position: "",
      phone_number: "",
      about_family: "",
      gender: workerGender,
      date_of_acceptance: "",
      address: "",
      name_of_graduate_institution: "",
      user_img: null,
      reference_img: null,
      military_ID_img: null,
    },
    validationSchema: addOperatorModalFormSchemas,
    onSubmit,
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFieldValue(event?.target?.name, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setisAddOperatorModalOpen(false);
  };

  return (
    <form
      className="add-operator__modal"
      onSubmit={handleSubmit}
      ref={modalRef}
    >
      <h2 className="add-operator__modal-title">Добавить сотрудника</h2>
      <div className="add-operator__modal-inputs">
        <div className="add-operator__modal-left">
          <InputWithTitle
            error={errors.name}
            touched={touched?.name}
            value={values?.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
            name="name"
            type="text"
            placeholder="Напишите..."
            title="F.I.SH"
            autoFocus={true}
          />
          {gender?.map((item) => {
            return (
              <AddOperatorSelect
                error={errors.gender}
                touched={touched?.gender}
                key={item?.id}
                item={item}
                setState={setWorkerGender}
              />
            );
          })}

          <InputWithTitle
            error={errors?.date_of_birth}
            touched={touched?.date_of_birth}
            value={values?.date_of_birth}
            onChange={handleChange}
            onBlur={handleBlur}
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            placeholder="Напишите..."
            title="Tug’ilgan sana"
          />
          <InputWithTitle
            value={values?.address}
            error={errors?.address}
            touched={touched?.address}
            onChange={handleChange}
            onBlur={handleBlur}
            id="address"
            name="address"
            type="text"
            placeholder="Напишите..."
            title="Yashash manzili"
          />
          <InputWithTitle
            error={errors?.phone_number}
            touched={touched?.phone_number}
            value={values?.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder="Напишите..."
            title="Tel/Uy raqami"
          />
          <InputWithTitle
            error={errors?.login}
            touched={touched?.login}
            value={values?.login}
            onChange={handleChange}
            onBlur={handleBlur}
            id="login"
            name="login"
            type="text"
            placeholder="Напишите..."
            title="ID РМО"
          />
          <InputWithTitle
            error={errors?.tariff_discharge}
            touched={touched?.tariff_discharge}
            value={values?.tariff_discharge}
            onChange={handleChange}
            onBlur={handleBlur}
            id="tariff_discharge"
            name="tariff_discharge"
            type="text"
            placeholder="Напишите..."
            title="Razryadi"
          />
          <InputWithTitle
            error={errors?.Pasport_id}
            touched={touched?.Pasport_id}
            value={values?.Pasport_id}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Pasport_id"
            name="Pasport_id"
            type="text"
            placeholder="Напишите..."
            title="Pasport seriya"
          />
          <InputWithTitle
            value={values?.pinfl}
            error={errors?.pinfl}
            touched={touched?.pinfl}
            onChange={handleChange}
            onBlur={handleBlur}
            id="pinfl"
            name="pinfl"
            type="text"
            placeholder="Напишите..."
            title="ПИНФЛ"
          />
          <InputWithTitle
            value={values?.date_of_acceptance}
            onChange={handleChange}
            onBlur={handleBlur}
            id="date_of_acceptance"
            name="date_of_acceptance"
            type="date"
            placeholder="Напишите..."
            title="Aloqa sohasiga qabul qilingan sana"
          />
          <InputWithTitle
            value={values?.name_of_graduate_institution}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name_of_graduate_institution"
            name="name_of_graduate_institution"
            type="text"
            placeholder="Напишите..."
            title="Tamomlagan muassasa nomi"
          />
        </div>
        <hr />
        <div className="add-operator__modal-right">
          <InputWithTitle
            value={values?.about_family}
            onChange={handleChange}
            onBlur={handleBlur}
            id="about_family"
            name="about_family"
            type="text"
            placeholder="Напишите..."
            title="Oila haqida ma’lumot"
          />
          <InputWithTitle
            value={values?.date_of_last_change_position}
            onChange={handleChange}
            onBlur={handleBlur}
            id="date_of_last_change_position"
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
            name="user_img"
            type="file"
            title="Xodim fotosurati"
            onChange={handleImageUpload}
          />

          <InputWithTitle
            name="reference_img"
            type="file"
            title="Ma’lumotnoma"
            onChange={handleImageUpload}
          />
          <InputWithTitle
            name="military_ID_img"
            type="file"
            title="Harbiy guvohnoma"
            onChange={handleImageUpload}
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
