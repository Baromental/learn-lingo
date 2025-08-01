import React, { useEffect } from 'react';
import { ReactComponent as CrossIcon } from '../../images/cross.svg';

import s from './Modal.module.css';

export const Modal = ({ onClose, children }) => {
  // useEffect(() => {
  //   document.body.style.overflowY = 'hidden';
  //   const handleEsc = e => {
  //     if (e.key === 'Escape') onClose();
  //   };
  //   document.addEventListener('keydown', handleEsc);
  //   return () => {
  //     document.removeEventListener('keydown', handleEsc);
  //     document.body.style.overflowY = 'auto';
  //   };
  // }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={s.overlay}>
      <div className={s.modalContent}>
        <CrossIcon onClick={onClose} className={s.icon} />
        <div>{children}</div>
      </div>
    </div>
  );
};
