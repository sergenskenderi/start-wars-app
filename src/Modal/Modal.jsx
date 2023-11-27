import React from 'react';
import './modal.css';
import Loading from '../Loading/Loading';

const Modal = ({ isOpen, onClose, children, title, loading }) => {
  const modalDisplay = isOpen ? 'block' : 'none';

  return (
    <div className="modal" style={{ display: modalDisplay }}>
        {loading ? <div className="modal-content-loading"><Loading /></div> : <div className="modal-content">
        <div className="modal-header">
            <h2>{title}</h2>
            <span className="close" onClick={onClose}>
            &times;
            </span>
        </div>
        {children}
        </div>}
    </div>
  );
};

export default Modal;
