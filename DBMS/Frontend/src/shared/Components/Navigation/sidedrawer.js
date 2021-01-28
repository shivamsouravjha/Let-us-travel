import React from 'react';
import './sidedrawer.css';
const sidedrawer = propse =>{
    return <aside className="side-drawer">
        {propse.children}
    </aside>
};
export default sidedrawer;