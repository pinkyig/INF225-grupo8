import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import DisplayHoras from './components/DisplayHoras';
import CreateHora from './components/CreateHora';
import VerPerfil from './components/VerPerfil'

function App() {
  return (
    <BrowserRouter>
      <div className="py-4">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<DisplayHoras />} />
        <Route path="/agenda" element={<CreateHora />} />
        <Route path="/perfil" element={<VerPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
