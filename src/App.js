import React from 'react';
import './App.css';
import firebaseConfig from './components/firebaseConfig'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login/>}></Route>
             <Route path="/reg" element={<Registration/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
