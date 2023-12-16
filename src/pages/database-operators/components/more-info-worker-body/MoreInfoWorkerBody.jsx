/* eslint-disable react/prop-types */
import MoreModalDocument from "../more-modal-document/MoreModalDocument";
import MoreModalSingleInfo from "../more-modal-single-info/MoreModalSingleInfo";
import "./more-info-worker-body.scss";
const MoreInfoWorkerBody = ({ targetWorkerData }) => {
  const targetWorker = targetWorkerData[0];

  return (
    <div className="more-modal__body-wrapper">
      <div className="more-modal__single-info__wrapper">
        <MoreModalSingleInfo
          value={targetWorker?.date_of_birth}
          title="Tug’ilgan sana"
        />
        <MoreModalSingleInfo
          value={targetWorker?.gender === "male" ? "Erkak" : "Ayol"}
          title="Jinsi"
        />
        <MoreModalSingleInfo
          value={targetWorker?.Pasport_id}
          title="Pasport seriya"
        />
        <MoreModalSingleInfo value={targetWorker?.pinfl} title="ПИНФЛ" />
        <MoreModalSingleInfo
          value={targetWorker?.information}
          title="Ma’lumoti"
        />
        <MoreModalSingleInfo
          value={targetWorker?.name_of_graduate_institution}
          title="Tamomlagan muassasa nomi"
        />
        <MoreModalSingleInfo
          value={targetWorker?.experience}
          title="Mehnat staji"
        />
        <MoreModalSingleInfo
          value={targetWorker?.employee_category}
          title="Xodim toifasi"
        />
        {/* <MoreModalSingleInfo value={targetWorker?.} title="Dekret vaqti" /> */}
        <MoreModalSingleInfo
          value={targetWorker?.date_of_acceptance}
          title="Aloqa sohasiga qabul qilingan sana"
        />
        <MoreModalSingleInfo
          value={targetWorker?.date_of_last_change_position}
          title="Lavozimdagi oxirgi o’zgarish"
        />
        <MoreModalSingleInfo
          value={targetWorker?.about_family}
          title="Oila haqida ma’lumot"
        />
      </div>
      <div className="more-modal__documents-wrapper">
        <MoreModalDocument
          title={"Объективка"}
          link={targetWorker?.reference_img}
        />
        <MoreModalDocument title="Военный билет" link={targetWorker?.military_ID_img} />
      </div>
    </div>
  );
};

export default MoreInfoWorkerBody;
