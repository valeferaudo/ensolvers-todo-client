import {
  GET_TASKS_FETCHING,
  GET_TASKS_FULFILLED,
  GET_TASKS_REJECTED,
  UPDATE_TASK_FETCHING,
  UPDATE_TASK_FULFILLED,
  UPDATE_TASK_REJECTED,
  ADD_TASK_FETCHING,
  ADD_TASK_FULFILLED,
  ADD_TASK_REJECTED,
  GET_ONE_TASK_FETCHING,
  GET_ONE_TASK_FULFILLED,
  GET_ONE_TASK_REJECTED,
  DELETE_TASK_FETCHING,
  DELETE_TASK_FULFILLED,
  DELETE_TASK_REJECTED,
  GET_FOLDER_TASKS_FETCHING,
  GET_FOLDER_TASKS_FULFILLED,
  GET_FOLDER_TASKS_REJECTED,
} from '../../Constants/actionTypes';

const BASE_URL = `http://localhost:5000/api/tasks`;
const getTasksFetching = () => ({
  type: GET_TASKS_FETCHING,
});

const getTasksFulfilled = (payload) => ({
  type: GET_TASKS_FULFILLED,
  payload,
});

const getTasksRejected = () => ({
  type: GET_TASKS_REJECTED,
});

export const getTasks = () => {
  return (dispatch) => {
    dispatch(getTasksFetching());
    fetch(BASE_URL)
      .then((response) => {
        if (response.status === 200 || response.status === 201)
          return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        dispatch(getTasksFulfilled(response.data));
      })
      .catch(() => {
        dispatch(getTasksRejected());
      });
  };
};

const updateTasksFetching = () => ({
  type: UPDATE_TASK_FETCHING,
});

const updateTasksFullfiled = (payload, id) => ({
  type: UPDATE_TASK_FULFILLED,
  payload,
  id,
});

const updateTasksRejected = () => ({
  type: UPDATE_TASK_REJECTED,
});

export const updateTask = (task, id) => (dispatch) => {
  dispatch(updateTasksFetching());
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
    .then((data) => {
      if (data.status === 200 || data.status === 201) return data.json();
      throw new Error(`HTTP ${data.status}`);
    })
    .then(() => {
      dispatch(updateTasksFullfiled(id));
    })
    .catch(() => {
      dispatch(updateTasksRejected());
    });
};

const addTaskFetching = () => ({
  type: ADD_TASK_FETCHING,
});

const addTaskFulfilled = (payload) => ({
  type: ADD_TASK_FULFILLED,
  payload,
});

const addTaskRejected = () => ({
  type: ADD_TASK_REJECTED,
});

export const addTask = (task) => (dispatch) => {
  dispatch(addTaskFetching());
  return fetch(BASE_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201)
        return response.json();
      throw new Error(`HTTP ${response.status}`);
    })
    .then((response) => {
      dispatch(addTaskFulfilled(response.data));
    })
    .catch(() => {
      dispatch(addTaskRejected());
    });
};
const getOneTaskFetching = () => ({
  type: GET_ONE_TASK_FETCHING,
});

const getOneTaskFulfilled = (payload) => ({
  type: GET_ONE_TASK_FULFILLED,
  payload,
});

const getOneTaskRejected = () => ({
  type: GET_ONE_TASK_REJECTED,
});

export const getOneTask = (id) => {
  return (dispatch) => {
    dispatch(getOneTaskFetching());
    return fetch(`${BASE_URL}/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201)
          return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        dispatch(getOneTaskFulfilled(response.data));
        return response.data;
      })
      .catch(() => {
        dispatch(getOneTaskRejected());
      });
  };
};
const deleteTaskFetching = () => ({
  type: DELETE_TASK_FETCHING,
});

const deleteTaskFulfilled = (payload) => ({
  type: DELETE_TASK_FULFILLED,
  payload,
});

const deleteTaskRejected = () => ({
  type: DELETE_TASK_REJECTED,
});

export const deleteTask = (id) => (dispatch) => {
  dispatch(deleteTaskFetching());
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201)
        return response.json();
      throw new Error(`HTTP ${response.status}`);
    })
    .then((response) => {
      dispatch(deleteTaskFulfilled(response.data));
    })
    .catch(() => {
      dispatch(deleteTaskRejected());
    });
};

const getFolderTasksFetching = () => ({
  type: GET_FOLDER_TASKS_FETCHING,
});

const getFolderTasksFulfilled = (payload) => ({
  type: GET_FOLDER_TASKS_FULFILLED,
  payload,
});

const getFolderTasksRejected = () => ({
  type: GET_FOLDER_TASKS_REJECTED,
});

export const getFolderTasks = (id) => {
  return (dispatch) => {
    dispatch(getFolderTasksFetching());
    fetch(`${BASE_URL}/folder/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201)
        return response.json();
        throw new Error(`HTTP ${response.status}`);
      })
      .then((response) => {
        dispatch(getFolderTasksFulfilled(response.data));
      })
      .catch(() => {
        dispatch(getFolderTasksRejected());
      });
  };
};