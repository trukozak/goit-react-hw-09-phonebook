import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUserOperation } from '../redux/auth/authOperations';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserOperation());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
