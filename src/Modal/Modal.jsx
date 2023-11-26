import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalDisplay = isOpen ? 'block' : 'none';

  return (
    <div className="modal" style={{ display: modalDisplay }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
