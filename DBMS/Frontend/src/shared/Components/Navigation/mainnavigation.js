import React from 'react';
import mainheader from './mainheader';
import './mainnavigation.css';
const mainnavigation =() => {
    return <mainheader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title"></h1>
    </mainheader>
};
export default mainnavigation;