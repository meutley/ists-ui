import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/studios/search">Find a Studio</Link></li>
                    <li className="nav-item"><Link to="#">My Schedule</Link></li>
                    <li className="nav-item"><Link to="#">Inbox</Link></li>
                    <li className="nav-item"><Link to="#">My Account</Link></li>
                    <li className="nav-item"><Link to="/users/login">Log In</Link></li>
                    <li className="nav-item"><Link to="#">Log Out</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
