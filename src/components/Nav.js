import React from 'react';
import '../App.css';
import logo from "../emoj.png";
import { Link } from "react-router-dom"

function Nav() {
    const navStyle = {
        color: "white"
    };

  return (
      <nav>
    
      <img src={logo} height="50"/>
      <ul className="nav-links">
          <Link style={navStyle} to="/about">
          <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
          <li>Shop</li>
          </Link>
          <Link style={navStyle} to="/signup">
          <li>Signup</li>
          </Link>
          <Link style={navStyle} to="/login">
          <li>Login</li>
          </Link>
          
      </ul>
     
        
    
    </nav>
  );
}

export default Nav;