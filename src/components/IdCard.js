import React from 'react';
import './IdCard.css';

function IdCard(props){
    return(  
        <div className = 'idcard'>
            <img src={props.picture} alt={props.firstName} />
            <div className = 'idcard-info'>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong> {transformCmInM(props.height)}m</p>
                <p><strong>Birth: </strong>{props.birth &&  props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

function transformCmInM (num){
    let result = num/100;
    return result;
}

export default IdCard;