import React from 'react';
import Card from '../../shared/Components/UIElements/Card';
import Placeitem from './Placeitem.js';
import './Placelist.css';
const Placelist =props=>{
    if(props.items.length ===0){
        return( <div className="place-list center">
            <card>
                <h2>
                    no such places....
                    <button>
                        Share Place
                    </button>
                </h2>
            </card>
        </div>);
    }
    return <ul className="place-list">
        {props.items.map(place=> <Placeitem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title1={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
        />)}
    </ul>;
};
export default Placelist;
