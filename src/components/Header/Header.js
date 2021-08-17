import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import { ThemeContext } from '../App';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Navigation from '../Navigation/Navigation';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import UserMenu from '../UserMenu/UserMenu';
import { HeaderContainer } from './HeaderStyled';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <HeaderContainer colors={theme.colors}>
        <LanguageSwitcher />
        <Navigation />
        {isAuth && <UserMenu />}
        <ThemeSwitcher />
      </HeaderContainer>
    </>
  );
};

export default Header;
