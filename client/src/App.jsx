import React from 'react';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Features from './pages/features';
import About from './pages/about';

const App = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
};

export default App;
