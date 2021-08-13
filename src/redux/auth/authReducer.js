import { createReducer } from '@reduxjs/toolkit';
import {
  getCurrentUserSuccess,
  loginSuccess,
  logOutSuccess,
  registerSuccess,
} from './authActions';

const authReducer = createReducer(
  {
    name: '',
    email: '',
    idToken: '',
    error: '',
  },
  {
    [registerSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [loginSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [logOutSuccess]: state => ({
      name: '',
      email: '',
      idToken: '',
    }),

    [getCurrentUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  },
);

export default authReducer;
