import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="navigation-bar">
            <h1 className="logo">Pedro Montesinos</h1>
            <nav>
                <Link exact to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;