// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import './App.css';

import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
