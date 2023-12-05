/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./more-btn-modal.scss";
import MoreModalHeader from "../more-modal-header/MoreModalHeader";

const MoreBtnModal = ({ setIsMoreBtnModalOpen }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsMoreBtnModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="database-operators__more-btn__modal" ref={modalRef}>
      <MoreModalHeader />
    </div>
  );
};

export default MoreBtnModal;
