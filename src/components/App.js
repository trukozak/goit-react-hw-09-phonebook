import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useLanguagePersistor from '../hooks/useLanguagePersistor';
import usePersistedTheme from '../hooks/usePersistedTheme';
import { currentUserOperation } from '../redux/auth/authOperations';
import Header from './Header/Header';
import Main from './Main/Main';

export const LanguageContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [language, setLanguage] = useLanguagePersistor();
  const [theme, changeTheme] = usePersistedTheme();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserOperation());
  }, [dispatch]);

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          <Header />
          <Main />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
