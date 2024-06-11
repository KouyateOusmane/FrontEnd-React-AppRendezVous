// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateClient from './pages/clientPages/createClient';
import LoginClient from './pages/clientPages/loginClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/clientPages/createClient' element={<CreateClient />} />
        <Route path='/clientPages/loginClient' element={<LoginClient />} />
      </Routes>
    </Router>
  );
}

export default App;
