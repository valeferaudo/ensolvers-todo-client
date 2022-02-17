import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './folders.module.css';
// import Spinner from '../Shared/Spinner';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { setModalType, setShowModal } from '../../Redux/Tasks/actions';
import Modal from '../Shared/Modal';
import {
  addFolder,
  deleteFolder,
  getFolders,
  updateFolder,
} from '../../Redux/Folders/thunks';
import { useHistory } from 'react-router-dom';

function Folders() {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.list);
  // const isLoading = useSelector((state) => state.tasks.isLoading);
  // const isLoadingForm = useSelector((state) => state.tasks.isLoadingForm);
  const [folderText, setFolderText] = useState('');
  const [idActive, setIdActive] = useState('');
  const showModal = useSelector((state) => state.tasks.showModal);
  const modalType = useSelector((state) => state.tasks.modalType);
  const history = useHistory();

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const handleOnChange = (e) => {
    setFolderText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderText.trim() !== '') {
      dispatch(addFolder({ title: folderText })).then(() => {
        dispatch(getFolders());
        setFolderText('');
      });
    }
  };
  const handleClickUpdate = (id) => {
    dispatch(setModalType('folder'));
    setIdActive(id);
    dispatch(setShowModal(true));
  };
  const handleShowModal = () => {
    dispatch(setShowModal(false));
  };
  const handleUpdateTask = (task) => {
    dispatch(updateFolder(task, idActive)).then(() => {
      dispatch(getFolders());
    });
  };
  const handleClickDelete = (id) => {
    dispatch(deleteFolder(id)).then(() => {
      dispatch(getFolders());
    });
  };
  // if (isLoading || isLoadingForm)
  //   return <Spinner type="ThreeDots" color="#002147" height={80} width={80} />;
  return (
    <>
      <div className={styles.container}>
        <h3>Folders</h3>
        <table className={styles.table}>
          <tbody>
            {folders.map((folder) => {
              return (
                <tr key={folder.id}>
                  <td>{folder.title}</td>
                  <td>
                    <button
                      className={styles.btnEdit}
                      onClick={() => handleClickUpdate(folder.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className={styles.btnRed}
                      onClick={() => handleClickDelete(folder.id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      className={styles.btnGreen}
                      onClick={() => history.push(`/folder/${folder.id}`)}
                    >
                      View items
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleOnChange}
            value={folderText}
            placeholder='New Folder'
          />
          <button type='submit'>Add</button>
        </form>
      </div>
      {showModal && (
        <Modal
          handleShowModal={handleShowModal}
          modalType={modalType}
          handleSubmit={handleUpdateTask}
          meta={idActive}
        />
      )}
    </>
  );
}

export default Folders;
