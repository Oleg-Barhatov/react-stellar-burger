import React from 'react';
import styles from './modal-overlay.module.css'

const ModalOverlay = ({visible, closePopup}) => {
  return (
    <div className={`${styles.overlay} ${visible && styles.opened}`} onClick={closePopup}>
      
    </div>
  );
};

export default ModalOverlay;