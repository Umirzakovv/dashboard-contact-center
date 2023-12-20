/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import MoreInfoWorkerModalBody from "../more-info-worker-body/MoreInfoWorkerBody";
import MoreInfoWorkerHeader from "../more-info-worker-header/MoreInfoWorkerHeader";
import "./more-info-worker-modal.scss";

const MoreInfoWorkerModal = ({ setIsMoreBtnModalOpen }) => {

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
      <MoreInfoWorkerHeader />
      <MoreInfoWorkerModalBody />
    </div>
  );
};

export default MoreInfoWorkerModal;
