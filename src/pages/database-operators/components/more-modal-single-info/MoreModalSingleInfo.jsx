/* eslint-disable react/prop-types */
import "./more-modal-single-info.scss";

const MoreModalSingleInfo = ({ title, value }) => {
  return (
    <div className="more-modal__single-info">
      <p>{title}</p>
      <span>{value}</span>
    </div>
  );
};

export default MoreModalSingleInfo;
