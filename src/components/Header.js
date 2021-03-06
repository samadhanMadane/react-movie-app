import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
        return (
            <p className="app-header">
                <Link className="home-link" to="/">
                    <img className="movie-logo" src="https://is2-ssl.mzstatic.com/image/thumb/Purple5/v4/ce/1a/7e/ce1a7e24-57a5-4694-4ecb-34515ea0a08b/source/512x512bb.png" alt="Movie App Logo"/>
                    <span className="app-title">Movies App</span>
                </Link>
                <span className="nav">
                    <Link className="nav-tab" to="/movies"> Movies </Link>
                    <Link className="nav-tab" to="/events"> Events </Link>
                </span>            
            </p>
    );
}

export default Header;