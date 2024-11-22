import React from 'react';

import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes dropdown functionality)
import About from './pages/About';
import Blog from './pages/Blog';
import { Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Blog />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
