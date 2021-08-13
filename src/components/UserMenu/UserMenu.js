import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutOperation } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelector';
import { UserMenuStyled } from './UserMenuStyled';

const UserMenu = () => {
  const username = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutOperation());
  };
  return (
    <UserMenuStyled>
      <p className="text">
        Welcome, <span className="">{username}</span>
      </p>
      <button className="" type="button" onClick={onLogOut}>
        Logout
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;
