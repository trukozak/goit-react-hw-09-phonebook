import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import { mainRoutes } from '../../routes/mainRoutes';
import { ThemeContext } from '../App';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavigationContainer } from './NavigationStyled';

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  const isAuth = useSelector(getIsAuth);
  return (
    <NavigationContainer colors={theme.colors}>
      <ul className="navList">
        {mainRoutes.map(route => (
          <NavigationItem {...route} key={route.path} isAuth={isAuth} />
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
