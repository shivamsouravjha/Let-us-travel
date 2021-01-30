import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './mainheader';
import NavLinks from './navlink';
import SideDrawer from './sidedrawer';

import './mainnavigation.css';

const Mainnavigation = props => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false);
    const openDrawer =()=>{
        setDrawerIsOpen(true);
    };
    const closeDrawer =()=>{
        setDrawerIsOpen(false);
    };
    return (
        <React.Fragment>
        {drawerIsOpen && (
            <SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
            </SideDrawer>)            }
    <MainHeader>
    <button className="main-navigation__menu-btn" onClick={openDrawer}>
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
</MainHeader>
</React.Fragment>
    );
};
export default Mainnavigation;