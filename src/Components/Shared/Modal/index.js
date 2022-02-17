import React from 'react';
import FolderForm from '../../Folders/Form';
import TaskForm from '../../Tasks/Form';
import styles from './modal.module.css';

function Modal({ handleShowModal, modalType, meta, handleSubmit }) {
  let modalComponent;
  switch (modalType) {
    case 'task':
      modalComponent = (
        <TaskForm
          id={meta}
          handleSubmit={handleSubmit}
          handleShowModal={handleShowModal}
        />
      );
      break;
    case 'folder':
      modalComponent = (
        <FolderForm
          id={meta}
          handleSubmit={handleSubmit}
          handleShowModal={handleShowModal}
        />
      );
      break;
    default:
      <></>;
  }
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={handleShowModal}>X</button>
        </div>
        {modalComponent}
      </div>
    </div>
  );
}
export default Modal;
