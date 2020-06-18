import React from 'react';
import './DriverCard.css';

import Rating from './Rating';

function DriverCard(props){
    
    return(
        <div className = 'drivercard'>
            <img src={props.img} alt={props.name} />
            <div className="driver-info">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;