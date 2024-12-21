import React from 'react';
import { Link } from 'react-router-dom';  // For navigation
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
        <div className="home-container">
        <h1>Welcome to the Collaboration Tool</h1>
        <p className="quote">Collaboration is the key to success!</p>
        <p className="quote">Teamwork makes the dream work.</p>

        <div className="buttons">
            <Link to="/login">
            <button className="home-btn">Login</button>
            </Link>
            <Link to="/register">
            <button className="home-btn">Register</button>
            </Link>
        </div>
        </div>
  );
};

export default Home;
