import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
} from '../../Constants/actionTypes';

const initialState = {
  isLoading: false,
  authenticated: false,
  error: false,
  messageText: '',
};
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_PENDING: {
        return {
          ...state,
          isLoading: true,
          error: initialState.error
        };
      }
      case LOGIN_FULFILLED: {
        return {
          ...state,
          isLoading: false,
          authenticated: true,
          error: false,
          messageText: ''
        };
      }
      case LOGIN_REJECTED: {
        return {
          ...state,
          isLoading: false,
          error: true,
          messageText: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default authReducer;