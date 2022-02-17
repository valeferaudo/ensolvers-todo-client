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
  SHOW_MODAL,
  MODAL_TYPE,
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
  folder: {},
};

const foldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FOLDERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_FOLDERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
        messageType: 'error',
        messageText: 'Cannot get folders',
      };
      case UPDATE_FOLDER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case UPDATE_FOLDER_FULFILLED:
        return {
          ...state,
          isLoading: false,
          messageType: 'success',
          messageText: 'Updated Folder',
          list: state.list.map((folder) => {
            if (folder.id === action.payload.id) {
              return action.payload;
            }
            return folder;
          }),
        };
      case UPDATE_FOLDER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
          messageType: 'error',
          messageText: 'Cannot update folder',
        };
      case ADD_FOLDER_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case ADD_FOLDER_FULFILLED:
        return {
          ...state,
          isLoading: false,
          messageType: 'success',
          messageText: 'Added Folder',
          list: [...state.list, action.payload],
        };
      case ADD_FOLDER_REJECTED:
        return {
          ...state,
          isLoading: false,
          error: true,
          messageType: 'error',
          messageText: 'Cannot add Folder',
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
      case GET_ONE_FOLDER_FETCHING:
        return {
          ...state,
          isLoadingForm: true
        };
      case GET_ONE_FOLDER_FULFILLED:
        return {
          ...state,
          isLoadingForm: false,
          folder: action.payload
        };
      case GET_ONE_FOLDER_REJECTED:
        return {
          ...state,
          isLoadingForm: false,
          error: true,
          messageType: 'error',
          messageText: 'Cannot get Folder'
        };
        case DELETE_FOLDER_FETCHING:
          return {
            ...state,
            isLoading: true
          };
        case DELETE_FOLDER_FULFILLED:
          return {
            ...state,
            isLoading: false,
            messageType: 'success',
            messageText: 'Deleted Client',
            list: state.list.filter((folder) => folder.id !== action.payload)
          };
        case DELETE_FOLDER_REJECTED:
          return {
            ...state,
            isLoading: false,
            error: true,
            messageType: 'error',
            messageText: 'Cannot delete Folder'
          };
    default:
      return state;
  }
};

export default foldersReducer;
