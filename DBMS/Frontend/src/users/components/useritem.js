import React from 'react';
import './useritem.css';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/Components/UIElements/Avatar';
const useritem = props =>{
    return(
        <li className="user-item">
            <div className=".user-item__content">
                <div className=".user-item__image ">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <h3>
                        {props.count} {props.count ===1 ?'Place':'Places'}
                    </h3>
                </div>

            </div>
        </li>
    );
};

export default useritem;