import React from 'react';
import logo from './logo.svg';
import './App.css';
import Houses from './config/Houses';
import HousesCreate from './config/HousesCreate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/config/houses' element={<Houses/>}/>
          <Route path='/config/houses/create' element={<HousesCreate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
