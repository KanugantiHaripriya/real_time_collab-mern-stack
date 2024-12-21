import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';  // Import Home component
import Login from './components/Login';
import Register from './components/Register';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Render Home component at "/" */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;


