import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Cadastro from './pages/Cadastro.js';
import Login from './pages/Login.js';
import { AuthProvider } from './contexts/AuthContext.js';


const App = () => (
  <BrowserRouter>
  <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>

);

export default App;

