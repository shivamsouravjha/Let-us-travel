import React from 'react';
import UserList from '../components/UserList';
const Users =()=>{
    const USERS=[{
  
        id:'U1',
        name:'Shivam',
        image:require('../../download (9).jpg'),
        places:3
}
];
    return <UserList items={USERS} />;
};
export default Users;