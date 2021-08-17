import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  authFormBtnSelectors,
  authFormPlaceholders,
  authFormSelectors,
} from '../../languages/languageSelectors/authForm';
import {
  loginOperation,
  registerOperation,
} from '../../redux/auth/authOperations';
import { LanguageContext, ThemeContext } from '../App';
import AuthFormStyled from './AuthFormStyled';

const initialState = { name: '', email: '', password: '' };

const AuthForm = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const [state, setState] = useState(initialState);
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChange = event => {
    const { name, value } = event.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const { email, password } = state;

    location.pathname === '/register'
      ? dispatch(registerOperation(state))
      : dispatch(loginOperation({ email, password }));
    setState({ ...initialState });
  };

  return (
    <AuthFormStyled
      autoComplete="off"
      onSubmit={onHandleSubmit}
      colors={theme.colors}
    >
      {location.pathname === '/register' && (
        <label>
          {authFormSelectors(language, 'username')} <br />
          <input
            type="text"
            name="name"
            placeholder={authFormPlaceholders(language, 'name')}
            autoComplete="on"
            pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={state.name}
            onChange={onHandleChange}
          />
        </label>
      )}
      <label>
        {authFormSelectors(language, 'email')} <br />
        <input
          type="text"
          name="email"
          placeholder="blabla@gmail.com"
          autoComplete="on"
          required
          value={state.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        {authFormSelectors(language, 'password')}
        <br />
        <input
          type="text"
          name="password"
          placeholder={authFormPlaceholders(language, 'password')}
          minLength="5"
          autoComplete="on"
          required
          value={state.password}
          onChange={onHandleChange}
        />
      </label>
      <button type="submit">
        {location.pathname === '/register'
          ? authFormBtnSelectors(language, 'register')
          : authFormBtnSelectors(language, 'login')}
      </button>
    </AuthFormStyled>
  );
};
export default AuthForm;
