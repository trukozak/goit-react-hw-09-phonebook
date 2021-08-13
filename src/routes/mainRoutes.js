import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(
      () => import('../pages/HomePage') /*webpackChunkName: 'HomePage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: lazy(
      () =>
        import('../pages/ContactsPage') /*webpackChunkName: 'ContactsPage'*/,
    ),
    exact: true,
    isPrivate: true,
    restricted: false,
  },
  {
    name: 'Register',
    path: '/register',
    component: lazy(
      () => import('../pages/AuthPage') /*webpackChunkName: 'AuthPage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: lazy(
      () => import('../pages/AuthPage') /*webpackChunkName: 'AuthPage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
