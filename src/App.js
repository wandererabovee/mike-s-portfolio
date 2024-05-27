// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home';
import BlogPage from './components/BlogPage';
import Projects from './components/Projects';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='main-content'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
