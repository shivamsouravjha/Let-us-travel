import React from 'react';

import UserItem from './useritem';
import Card from '../../shared/Components/UIElements/Card';
import './UserList.css';

const UserList = props =>{
    if(props.items.length ===0){
        return (
            <div className="center">
                <Card>
                <h2>No Such User</h2>
                </Card>
            </div>
        );
    }
    return <ul className="users-list">
        {
            props.items.map(user => <UserItem 
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            count={user.places}
            />)
        }
    </ul>;
};

export default UserList;