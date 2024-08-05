import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">MyFast</span> <span className='X'>X</span><img src='box_logo.png'></img> Partner
      </div>
      <div className="nav-buttons">
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
