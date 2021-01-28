import React from 'react';
import { Link } from 'react-router-dom';
import mainheader from './mainheader';
import NavLinks from './navlink';
import './mainnavigation.css';

const mainnavigation =() => {
    return (
    <mainheader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className = "main-navigation__title">
            <Link to="/">
                Your Places
            </Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks />
        </nav>
    </mainheader>
    );
};
export default mainnavigation;