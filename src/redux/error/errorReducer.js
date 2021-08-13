import { createReducer } from '@reduxjs/toolkit';
import { getCurrentUserError, getCurrentUserRequest, loginError, loginRequest, logOutError, logOutRequest, registerError, registerRequest } from '../auth/authActions';
import {
  addContactError,
  addContactRequest,
  deleteContactError,
  deleteContactRequest,
  fetchContactsError,
  fetchContactsRequest,
} from '../contacts/contactsAction';

const setError = (_, { payload }) => payload;
const refreshError = () => '';

export const error = createReducer('', {
  [registerError]: setError,
  [registerRequest]: refreshError,
  [loginError]: setError,
  [loginRequest]: refreshError,
  [logOutError]: setError,
  [logOutRequest]: refreshError,
  [getCurrentUserError]: setError,
  [getCurrentUserRequest]: refreshError,
  [fetchContactsRequest]: refreshError,
  [fetchContactsError]: setError,
  [addContactRequest]: refreshError,
  [addContactError]: setError,
  [deleteContactRequest]: refreshError,
  [deleteContactError]: setError,
});
