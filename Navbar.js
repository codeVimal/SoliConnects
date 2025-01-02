import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import moreline from './moreline.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
         <span className="navbar-logo-soli">Soli</span>
         <span className="navbar-logo-connects">c o n n e c t s</span> 
        </h1>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/Services" onClick={toggleMenu}>Services</Link>
        <Link to="/About" onClick={toggleMenu}>About</Link>
        <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <img src={moreline} alt="menu" className="navbar-toggle-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
