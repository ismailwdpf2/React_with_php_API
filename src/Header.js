import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/img/logo1.jpg';

function Header() {
  return (
    <div>
      <div className="navMenu">
        <ul>
        <img src={logo} className='logo' alt="Logo" />
          <Link to="/" className="navItem">HOME</Link>
          <Link to="/players" className="navItem">PLAYERS</Link>
          <Link to="/contact" className="navItem">CONTACT</Link>
          <Link to="/about" className="navItem">ABOUT</Link>
        </ul>
      </div>
      <marquee className="mar" behavior="" direction="">
        WELCOME TO CRICKET PLAYERS INFO WEBSITE
      </marquee>
      <br />
    </div>
  );
}

export default Header;

