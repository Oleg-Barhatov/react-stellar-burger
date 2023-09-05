import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createPortal} from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { getModalVisible } from '../../utils/selectors';
import { MODAL_CLOSE } from '../../services/modal/modalAction';

const Modal = ({children}) => {

  const dispatch = useDispatch();
  const visible = useSelector(getModalVisible)

  const closePopup = () => {
    dispatch({type: MODAL_CLOSE})
  }

  useEffect(() => {
    if(!visible) return;

    const closePopupEsc = event => {
      if(event.key === 'Escape') {
        dispatch({type: MODAL_CLOSE})
      };
    };

    document.addEventListener('keydown', closePopupEsc);

    return () => document.removeEventListener('keydown', closePopupEsc);
  }, [dispatch, visible]);

  return createPortal(
    <>
      <ModalOverlay visible={visible} closePopup={closePopup}/>
      <div className={`${styles.modal} ${visible && styles.opened}`}>
        <button className={styles.btn} onClick={closePopup}>
          <CloseIcon type="primary"/>
        </button>
        {children}
      </div>
    </>, document.getElementById("popup")
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;