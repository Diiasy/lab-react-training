import React from 'react';
import './Random.css';

function Random(props){
    return(
        <div className = 'random'>
            <p>Random value between {props.min} and {props.max} ={'>'} {random(props.min, props.max)}</p>
        </div>
    )
}

function random(min, max){
    let result = Math.floor(min + Math.random()*(max-min+1))
    return result;
}

export default Random;