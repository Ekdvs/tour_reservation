import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <h1>Welcome to page</h1>
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        </div>
      
    </div>
  );
}

export default App;
