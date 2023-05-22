import React, { FC, useEffect } from 'react';
import { useActions } from './hooks/useActions';
import AppRouter from './components/AppRouter';
import "./styles/App.css";

const App: FC = () => {
  const {setIsAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true);
    }
  })

  return (
      <div className="App">
      <AppRouter/>
    </div>
  );
};

export default App;
