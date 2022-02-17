import {
  GET_FOLDERS_FETCHING,
  GET_FOLDERS_FULFILLED,
  GET_FOLDERS_REJECTED,
  UPDATE_FOLDER_FETCHING,
  UPDATE_FOLDER_FULFILLED,
  UPDATE_FOLDER_REJECTED,
  ADD_FOLDER_FETCHING,
  ADD_FOLDER_FULFILLED,
  ADD_FOLDER_REJECTED,
  GET_ONE_FOLDER_FETCHING,
  GET_ONE_FOLDER_FULFILLED,
  GET_ONE_FOLDER_REJECTED,
  DELETE_FOLDER_FETCHING,
  DELETE_FOLDER_FULFILLED,
  DELETE_FOLDER_REJECTED,
} from '../../Constants/actionTypes';

const BASE_URL = `http://localhost:5000/api/folders`;
const getFoldersFetching = () => ({
  type: GET_FOLDERS_FETCHING,
});

const getFoldersFulfilled = (payload) => ({
  type: GET_FOLDERS_FULFILLED,
  payload,
});

const getFoldersRejected = () => ({
  type: GET_FOLDERS_REJECTED,
});

export const getFolders = () => {
  return (dispatch) => {
    dispatch(getFoldersFetching());
    fetch(BASE_URL)
      .then((response) => {
        if (response.status === 200 || response.status === 201)
          return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        dispatch(getFoldersFulfilled(response.data));
      })
      .catch(() => {
        dispatch(getFoldersRejected());
      });
  };
};


const updateFolderFetching = () => ({
    type: UPDATE_FOLDER_FETCHING,
  });
  
  const updateFolderFullfiled = (payload, id) => ({
    type: UPDATE_FOLDER_FULFILLED,
    payload,
    id,
  });
  
  const updateFolderRejected = () => ({
    type: UPDATE_FOLDER_REJECTED,
  });
  
  export const updateFolder = (folder, id) => (dispatch) => {
    dispatch(updateFolderFetching());
    return fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(folder),
    })
      .then((data) => {
        if (data.status === 200 || data.status === 201) return data.json();
        throw new Error(`HTTP ${data.status}`);
      })
      .then(() => {
        dispatch(updateFolderFullfiled(id));
      })
      .catch(() => {
        dispatch(updateFolderRejected());
      });
  };
  
  const addFolderFetching = () => ({
    type: ADD_FOLDER_FETCHING,
  });
  
  const addFolderFulfilled = (payload) => ({
    type: ADD_FOLDER_FULFILLED,
    payload,
  });
  
  const addFolderRejected = () => ({
    type: ADD_FOLDER_REJECTED,
  });
  
  export const addFolder = (folder) => (dispatch) => {
    dispatch(addFolderFetching());
    return fetch(BASE_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(folder),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201)
          return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        dispatch(addFolderFulfilled(response.data));
      })
      .catch(() => {
        dispatch(addFolderRejected());
      });
  };
  const getOneFolderFetching = () => ({
      type: GET_ONE_FOLDER_FETCHING
    });
    
    const getOneFolderFulfilled = (payload) => ({
      type: GET_ONE_FOLDER_FULFILLED,
      payload
    });
    
    const getOneFolderRejected = () => ({
      type: GET_ONE_FOLDER_REJECTED
    });
    
    export const getOneFolder = (id) => {
      return (dispatch) => {
        dispatch(getOneFolderFetching());
        return fetch(`${BASE_URL}/${id}`)
          .then((response) => {
            if (response.status === 200 || response.status === 201) return response.json();
            throw new Error(`HTTP ${response.status}`);
          })
          .then((response) => {
            dispatch(getOneFolderFulfilled(response.data));
            return response.data;
          })
          .catch(() => {
            dispatch(getOneFolderRejected());
          });
      };
    };
    const deleteFolderFetching = () => ({
      type: DELETE_FOLDER_FETCHING
    });
    
    const deleteFolderFulfilled = (payload) => ({
      type: DELETE_FOLDER_FULFILLED,
      payload
    });
    
    const deleteFolderRejected = () => ({
      type: DELETE_FOLDER_REJECTED
    });
    
    export const deleteFolder = (id) => (dispatch) => {
      dispatch(deleteFolderFetching());
      return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then((response) => {
          if (response.status === 200 || response.status === 201) return response.json();
          throw new Error(`HTTP ${response.status}`);
        })
        .then((response) => {
          dispatch(deleteFolderFulfilled(response.data));
        })
        .catch(() => {
          dispatch(deleteFolderRejected());
        });
    };