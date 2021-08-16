import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useLanguagePersistor from '../hooks/useLanguagePersistor';
import { currentUserOperation } from '../redux/auth/authOperations';
import Header from './Header/Header';
import Main from './Main/Main';

export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useLanguagePersistor();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserOperation());
  }, [dispatch]);

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Header />
        <Main />
      </LanguageContext.Provider>
    </>
  );
};

export default App;
