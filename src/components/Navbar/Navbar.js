import React from 'react';
import logo from '../../dbzimage.png'; 
import nav from './navbar.scss';
export default function Navbar() {
    return (
       <nav className="navbar">
           <img className="dbz" src={logo} alt="City Tours" />
            <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                home
                </a>
                </li>
            <li>
                <a href="/" className="nav-link">
                about us
                </a>
                </li>
            <li>
                <a href="/" className="nav-link active">
                More Characters
                </a>
                </li>
          
           </ul>
            </nav>
    )
}
