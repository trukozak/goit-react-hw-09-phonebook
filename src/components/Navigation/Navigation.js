import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import { mainRoutes } from '../../routes/mainRoutes';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavigationContainer } from './NavigationStyled';

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map(route => (
          <NavigationItem {...route} key={route.path} isAuth={isAuth} />
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
