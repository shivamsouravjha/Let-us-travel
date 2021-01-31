import React from 'react';
import Card from '../../shared/Components/UIElements/Card';
import Button from '../../shared/Components/Button/Button';
 import './Placeitem.css';
const Placeitem = props =>{
    return <li className="place-item">
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
            <Button tp={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>;
};
export default Placeitem;