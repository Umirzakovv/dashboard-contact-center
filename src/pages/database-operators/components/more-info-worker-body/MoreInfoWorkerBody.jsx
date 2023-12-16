import MoreModalDocument from "../more-modal-document/MoreModalDocument";
import MoreModalSingleInfo from "../more-modal-single-info/MoreModalSingleInfo";
import "./more-info-worker-body.scss";
const MoreInfoWorkerBody = () => {
  return (
    <div className="more-modal__body-wrapper">
      <div className="more-modal__single-info__wrapper">
        <MoreModalSingleInfo />
        <MoreModalSingleInfo />
        <MoreModalSingleInfo />
      </div>
      <div className="more-modal__documents-wrapper">
        <MoreModalDocument />
        <MoreModalDocument />
        <MoreModalDocument />
      </div>
    </div>
  );
};

export default MoreInfoWorkerBody;
