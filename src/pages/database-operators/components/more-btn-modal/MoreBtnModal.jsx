/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./more-btn-modal.scss";

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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur odio,
      nisi nesciunt repellendus vitae sapiente nulla nihil molestias, laudantium
      voluptas sequi libero laborum consequuntur at adipisci officia,
      perferendis quam beatae.
    </div>
  );
};

export default MoreBtnModal;
