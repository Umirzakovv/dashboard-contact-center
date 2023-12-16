/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./more-modal-document.scss";

const MoreModalDocument = ({ item }) => {
  return (
    <div className="more-modal__document">
      <Link to="/" className="more-modal__document-link">
        {item?.title}
      </Link>
      <img
        style={{ width: "250px", height: "250px" }}
        src={item?.img}
        alt="document img"
      />
    </div>
  );
};

export default MoreModalDocument;
