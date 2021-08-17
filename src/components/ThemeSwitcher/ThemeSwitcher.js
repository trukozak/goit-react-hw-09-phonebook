import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../App';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        onChange={changeTheme}
        checked={theme.title === 'light' ? true : false}
        onColor={theme.colors.text}
        offColor={theme.colors.main}
        height={30}
        width={70}
      />
    </>
  );
};

export default ThemeSwitcher;
