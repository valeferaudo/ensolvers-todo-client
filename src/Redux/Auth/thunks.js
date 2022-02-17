import { loginPending, loginSuccess, loginError } from './actions';

const BASE_URL = `http://localhost:5000/api/auth`;

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(loginPending());
    return fetch(`${BASE_URL}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          sessionStorage.setItem('isAuthenticated', true);
          return dispatch(loginSuccess());
        }
        if (response.status === 404) {
          return dispatch(loginError('Wrong Email or Password'));
        }
        throw new Error(`HTTP ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
        return dispatch(loginError('Server error'));
      });
  };
};
