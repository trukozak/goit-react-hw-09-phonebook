import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'home',
    path: '/',
    component: lazy(
      () => import('../pages/HomePage') /*webpackChunkName: 'HomePage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: 'contacts',
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
    name: 'register',
    path: '/register',
    component: lazy(
      () => import('../pages/AuthPage') /*webpackChunkName: 'AuthPage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: 'login',
    path: '/login',
    component: lazy(
      () => import('../pages/AuthPage') /*webpackChunkName: 'AuthPage'*/,
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
