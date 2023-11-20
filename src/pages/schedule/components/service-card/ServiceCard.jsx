/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Headphones from "../../../../assets/icons/headphone.svg";
import "./service-card.scss";

const ServiceCard = ({ service }) => {
  return (
    <Link to={service?.href} className="service-card">
      <img src={Headphones} alt="headphones icon" className="headphone-icon" />
      <div className="service-title">
        <h4>Названия услуги</h4>
        <h6>{service?.title}</h6>
      </div>
    </Link>
  );
};

export default ServiceCard;
