import React, { useState } from 'react';
import Card from '../../shared/Components/UIElements/Card';
import Button from '../../shared/Components/Button/Button';
import Modal from '../../shared/Components/UIElements/Modal';
 import './Placeitem.css';
const Placeitem = props =>{
    const [showonMap,setshowmap]=useState(false);
    const openmap = ()=>setshowmap(true);
    const closemap = ()=>setshowmap(false);
    return( 
    <React.Fragment>
        <Modal show={showonMap} onCancel={closemap} 
        header={props.address}
        conntentClass="place-item__modal-content"
        footerClass="place-item_modal-actions"
        footer = {<Button onClick={closemap}>Close</Button>}
        >
            <div className="map-container">
                The map
            </div>
        </Modal>
    <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <Button inverse>
                View on the Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>
    </React.Fragment>);
};
export default Placeitem;