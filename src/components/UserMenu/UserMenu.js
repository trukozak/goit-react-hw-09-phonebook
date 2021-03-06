import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import languages from '../../languages';
import { logOutOperation } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelector';
import { LanguageContext, ThemeContext } from '../App';
import { UserMenuStyled } from './UserMenuStyled';

const UserMenu = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const username = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutOperation());
  };
  return (
    <UserMenuStyled colors={theme.colors}>
      <p className="text">
        Welcome, <span className="">{username}</span>
      </p>
      <button className="" type="button" onClick={onLogOut}>
        {languages[language].header.usermenu.logout}
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;
