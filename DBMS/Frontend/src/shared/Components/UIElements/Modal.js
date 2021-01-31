import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';
const ModalOverlay =props=>{
    const content=(
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal_header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form>
                onSubmit ={
                    props.onSubmit ? props.onSubmit : event=>event.preventDefault
                }
                
            </form>
        </div>
    );
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
};
const Modal = props =>{

};
export default Modal;
