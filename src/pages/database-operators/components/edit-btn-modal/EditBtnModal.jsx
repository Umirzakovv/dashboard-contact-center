/* eslint-disable react/prop-types */

import { useRef } from "react";
import "./edit-btn-modal.scss";
import { useEffect } from "react";

const EditBtnModal = ({ setIsEditBtnModalOpen }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef?.current.contains(e.target)) {
        setIsEditBtnModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="database-operators__edit-btn__modal" ref={modalRef}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi
      eveniet molestias quo odio perferendis dignissimos quam, delectus aliquid
      voluptatem inventore praesentium porro impedit unde maxime magnam
      quibusdam distinctio numquam?
    </div>
  );
};

export default EditBtnModal;
