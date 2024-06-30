// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import './App.css';

import { Header } from './components/Header/Header';
import { Favorites } from './pages/Favorites';
import { Form } from './pages/Form';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/forms" element={<Form />}  />
      </Routes>
    </div>
  );
}

export default App;
