import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { navSelectors } from '../../../languages/languageSelectors/navigation';
import { LanguageContext } from '../../App';
const NavigationItem = ({
  path,
  exact,
  name,
  isPrivate,
  restricted,
  isAuth,
}) => {
  const { language } = useContext(LanguageContext);
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
            {navSelectors(language, 'home')}
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
            {navSelectors(language, 'contacts')}
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
            {navSelectors(language, [name])}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
