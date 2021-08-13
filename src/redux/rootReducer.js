import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';
import { error } from './error/errorReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['idToken'],
};

const rootReducer = combineReducers({
  items: contactsReducer,
  auth: persistReducer(persistConfig, authReducer),
  error,
});
export default rootReducer;
