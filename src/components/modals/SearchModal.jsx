import React from "react";

const SearchModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const modalClass = isOpen
    ? "modal-overlay-search active"
    : "modal-overlay-search";
  const modalContentClass = isOpen
    ? "modal-content-search active"
    : "modal-content-search";

  return (
    <div className={modalClass} onClick={onClose}>
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        <div className="px-3">{children}</div>
      </div>
    </div>
  );
};

export default SearchModal;
