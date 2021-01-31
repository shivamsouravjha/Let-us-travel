import React from 'react';
import { useParams } from 'react-router-dom';
import Placelist from '../components/Placeslist';
const Dummt_places =[
    {
        id:'p1',
        title:'somehwere',
        description:'my p[roejct',
        imageUrl: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
        address:'nearby',
        location:{
            lat:32.54,
            lng:21.3
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'somehwere near',
        description:'my proejct',
        imageUrl: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
        address:'nearby',
        location:{
            lat:3.54,
            lng:21.477
        },
        creator:'u2'
    }
]
const UserPlaces =()=>{
    const userId = useParams().userId;
    const loadedPlaces = Dummt_places.filter(place=>place.creator===userId);
    return <Placelist items={loadedPlaces}/>;
};
export default UserPlaces;