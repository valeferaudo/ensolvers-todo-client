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
  SHOW_MODAL,
  MODAL_TYPE,
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

const initialState = {
  isLoading: false,
  isLoadingForm: false,
  list: [],
  messageType: '',
  messageText: '',
  showMessage: false,
  showModal: false,
  modalType: '',
  task: {},
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASKS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_TASKS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot get tasks',
      };
    case UPDATE_TASK_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TASK_FULFILLED:
      return {
        ...state,
        isLoading: false,
        messageType: 'success',
        messageText: 'Updated Task',
        list: state.list.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case UPDATE_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot update task',
      };
    case ADD_TASK_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TASK_FULFILLED:
      return {
        ...state,
        isLoading: false,
        messageType: 'success',
        messageText: 'Added Task',
        list: [...state.list, action.payload],
      };
    case ADD_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot add task',
      };
    case SHOW_MODAL: {
      return {
        ...state,
        showModal: action.showModal,
      };
    }
    case MODAL_TYPE: {
      return {
        ...state,
        modalType: action.modalType,
      };
    }
    case GET_ONE_TASK_FETCHING:
      return {
        ...state,
        isLoadingForm: true,
      };
    case GET_ONE_TASK_FULFILLED:
      return {
        ...state,
        isLoadingForm: false,
        task: action.payload,
      };
    case GET_ONE_TASK_REJECTED:
      return {
        ...state,
        isLoadingForm: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot get task',
      };
    case DELETE_TASK_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TASK_FULFILLED:
      return {
        ...state,
        isLoading: false,
        messageType: 'success',
        messageText: 'Deleted Client',
        list: state.list.filter((task) => task.id !== action.payload),
      };
    case DELETE_TASK_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot delete Task',
      };
    case GET_FOLDER_TASKS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FOLDER_TASKS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_FOLDER_TASKS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot get folder tasks',
      };
    default:
      return state;
  }
};

export default tasksReducer;
