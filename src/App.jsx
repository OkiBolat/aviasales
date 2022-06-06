import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import logo from './assets/Logo.svg'
import './App.css';
import { getTicketsThunk } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTicketsThunk())
  })
  return (
    <div className="App">
      <img className='App__logo' src={logo} alt="" />
      <HomePage />
    </div>
  );
}

export default App;
