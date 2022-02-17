import {
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
  } from '../../Constants/actionTypes';
  
  export const loginPending = () => {
    return {
      type: LOGIN_PENDING
    };
  };
  
  export const loginSuccess = (data) => {
    return {
      type: LOGIN_FULFILLED,
      payload: data
    };
  };
  
  export const loginError = (error) => {
    return {
      type: LOGIN_REJECTED,
      payload: error
    };
  };