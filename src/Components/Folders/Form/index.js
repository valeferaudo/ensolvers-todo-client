import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFolder } from '../../../Redux/Folders/thunks';
import styles from './form.module.css';

function FolderForm({ id, handleSubmit, handleShowModal }) {
  const dispatch = useDispatch();
  const [folderText, setFolderTest] = useState({title: ''});
  const folder = useSelector((state) => state.folders.folder);

  useEffect(() => {
    if (id) {
      dispatch(getOneFolder(id)).then((data) => {
          setFolderTest({title: data.title })
      })
    }
  }, []);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFolderTest({ ...folderText, [name]: value });
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(folderText.title.trim() !== ''){
        handleSubmit(folderText);
        handleShowModal(false);
    }
  }
  return (
    <>
      <h3>Editing Folder: {folder.title}</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="title" onChange={handleOnChange} value={folderText.title} />
        <button type="submit">Save</button>
        <button type="button" onClick={() => handleShowModal(false)}>Cancel</button>
      </form>
    </>
  );
}
export default FolderForm;
