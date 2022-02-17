import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, getTasks, updateTask, getFolderTasks } from '../../Redux/Tasks/thunks';
import { getOneFolder } from '../../Redux/Folders/thunks'
import styles from './tasks.module.css';
// import Spinner from '../Shared/Spinner';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { setModalType, setShowModal } from '../../Redux/Tasks/actions';
import Modal from '../Shared/Modal';
import { useParams } from 'react-router-dom';

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  // const isLoading = useSelector((state) => state.tasks.isLoading);
  // const isLoadingForm = useSelector((state) => state.tasks.isLoadingForm);
  const showModal = useSelector((state) => state.tasks.showModal);
  const modalType = useSelector((state) => state.tasks.modalType);
  const folder = useSelector((state) => state.folders.folder);
  const [taskText, setTaskText] = useState('');
  const [idActive, setIdActive] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined){
      dispatch(getFolderTasks(id));
      dispatch(getOneFolder(id))
    } 
    else {
      dispatch(getTasks());
    }
  }, [])

  const onCompleted = (id, task) => {
    dispatch(updateTask(task, id)).then(() => {
      dispatch(getTasks());
    });
  }
  const handleOnChange = (e) => {
    setTaskText(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(taskText.trim() !== ''){
      dispatch(addTask({description: taskText, FolderId:id || null})).then(() => {
        id !== undefined ? dispatch(getFolderTasks(id)) : dispatch(getTasks());
        setTaskText('');
      });
    }
  }
  const handleClickUpdate = (id) => {
    dispatch(setModalType('task'));
    setIdActive(id);
    dispatch(setShowModal(true));
  };
  const handleShowModal = () => {
    dispatch(setShowModal(false));
  };
  const handleUpdateTask = (task) => {
    dispatch(updateTask(task, idActive)).then(() => {
      dispatch(getTasks());
    });
  }
  const handleClickDelete = (idDeleted) => {
    dispatch(deleteTask(idDeleted)).then(() => {
      id !== undefined ? dispatch(getFolderTasks(id)) : dispatch(getTasks());
    });
  };
  // if (isLoading || isLoadingForm)
  //   return <Spinner type="ThreeDots" color="#002147" height={80} width={80} />;
  return (
    <>
      <div className={styles.container}>
        {id !== undefined ? <h3>Folders {'>'} {folder.title}</h3> : <h3>To-Do List</h3>}
        <table className={styles.table}>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td><input type="checkbox" 
                        checked={task.completed} 
                        onChange={() => onCompleted(task.id, {
                          ...task,
                          completed: !task.completed
                        }) }
                      /></td>
                  <td className={task.completed ? styles.completed : styles.description}>{task.description}</td>
                  <td>
                      <button className={styles.btnEdit} onClick={() => handleClickUpdate(task.id)}><FaEdit /></button>
                      <button className={styles.btnRed} onClick={() => handleClickDelete(task.id)}><FaTrashAlt /></button>
                  </td>
              </tr>
              )
            })}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleOnChange} value={taskText} placeholder="New Task" />
            <button type="submit">Add</button>
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

export default Tasks;
