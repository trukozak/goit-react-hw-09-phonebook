import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { HeaderContainer } from './HeaderStyled';

const Header = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <HeaderContainer>
        <Navigation />
        {isAuth && <UserMenu />}
      </HeaderContainer>
      <LanguageSwitcher />
    </>
  );
};

export default Header;
