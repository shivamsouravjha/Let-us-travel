import React from 'react';
import './mainheader.css';
const Mainheader = props => {
    return <header className="main-header">
        {props.children}
        </header>
    ;
};
export default Mainheader;