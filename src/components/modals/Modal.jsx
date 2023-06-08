import React from "react";
import { BiXCircle } from "react-icons/bi";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen ? "modal-overlay active" : "modal-overlay";
  const modalContentClass = isOpen ? "modal-content active" : "modal-content";

  return (
    <div className={modalClass} onClick={onClose}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <BiXCircle className="text-[41px] text-red-600" />
        </button>
        <div className="p-3">
          <h2 className="text-left text-2xl font-semibold">{title}</h2>
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
