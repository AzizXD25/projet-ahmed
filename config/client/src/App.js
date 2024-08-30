import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Navgation from './components/Navgation';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navgation /> 
      <Routes>
      <Route path = "/" element = {<Home />} /> 
      <Route path = "/register" element = {<Register />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/*" element = {<Error />} />
      </Routes>
    </div> 
  );
}

export default App;
