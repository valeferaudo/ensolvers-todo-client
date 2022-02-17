import {
    MODAL_TYPE,
    SHOW_MODAL,
  } from '../../Constants/actionTypes';
  
  export const setShowModal = (showModal) => {
    return {
      type: SHOW_MODAL,
      showModal
    };
  };
  export const setModalType = (modalType) => {
    return {
      type: MODAL_TYPE,
      modalType
    };
  };