/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./more-modal-document.scss";

const MoreModalDocument = ({ title, link }) => {
  return (
    <div className="more-modal__document">
      <Link to={link} target="_blank" className="more-modal__document-link">
        {title}
      </Link>
      <img
        style={{ width: "250px", height: "250px" }}
        src={link}
        alt="document img"
      />
    </div>
  );
};

export default MoreModalDocument;
