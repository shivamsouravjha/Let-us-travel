import React from 'react';
import ReactDOM from 'react-dom';
import './sidedrawer.css';
const SideDrawer = propse =>{
    const content = <aside className="side-drawer">
        {propse.children}
    </aside>
    return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));
};
export default SideDrawer;