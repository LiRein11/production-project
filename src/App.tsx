import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutAsync } from './pages/AboutPage/About.async';
import { MainAsync } from './pages/MainPage/Main.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainAsync />} />
          <Route path='/about' element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
