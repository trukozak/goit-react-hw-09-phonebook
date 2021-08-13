import React from 'react';
import { NavLink } from 'react-router-dom';
const NavigationItem = ({
  path,
  exact,
  name,
  isPrivate,
  restricted,
  isAuth,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className="navItem" key={path}>
          <NavLink
            className="navLink"
            activeClassName="navLinkActive"
            to={path}
            exact={exact}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivate && !restricted && isAuth && (
        <li className="navItem" key={path}>
          <NavLink
            className="navLink"
            activeClassName="navLinkActive"
            to={path}
            exact={exact}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivate && restricted && !isAuth && (
        <li className="navItem" key={path}>
          <NavLink
            className="navLink"
            activeClassName="navLinkActive"
            to={path}
            exact={exact}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
