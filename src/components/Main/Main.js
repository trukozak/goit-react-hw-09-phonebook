import React, { Suspense, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelector';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import { ThemeContext } from '../App';
import { AppLoader } from '../Loader/Loader';
import { MainContainer } from './MainStyled';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const isAuth = useSelector(getIsAuth);
  return (
    <MainContainer colors={theme.colors}>
      <Suspense fallback={<AppLoader />}>
        <Switch>
          {mainRoutes.map(({ isPrivate, path, exact, component, restricted }) =>
            isPrivate ? (
              <PrivateRoute
                path={path}
                exact={exact}
                component={component}
                key={path}
                isAuth={isAuth}
              />
            ) : (
              <PublicRoute
                path={path}
                exact={exact}
                component={component}
                key={path}
                isAuth={isAuth}
                restricted={restricted}
              />
            ),
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
