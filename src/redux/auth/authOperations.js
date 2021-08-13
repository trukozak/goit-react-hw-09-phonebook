import axios from 'axios';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logOutError,
  logOutRequest,
  logOutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set: token => {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset: () => {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const registerOperation = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', {
      ...user,
    });
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const loginOperation = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post('/users/login', {
      ...user,
    });
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
export const logOutOperation = user => async dispatch => {
  dispatch(logOutRequest());
  try {
    const { data } = await axios.post('/users/logout', user);

    token.unset();
    dispatch(logOutSuccess(data));
  } catch (error) {
    dispatch(logOutError(error.message));
  }
};

export const currentUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
