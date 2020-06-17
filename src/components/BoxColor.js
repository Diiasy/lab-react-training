import React from 'react';
import './BoxColor.css';

function BoxColor(props){

    function decToHex (num) {
        let result;
        if (num < 16 ) {
            result = '0' + num.toString(16);
        } else {
            result = num.toString(16);
        }
        return result;
    }

    function rgbToHex (r, g, b) {
        return '#' + decToHex(r) + decToHex(g) + decToHex(b);
    }

    //https://www.w3.org/TR/AERT/#color-contrast
    function contrastWithBg (r, g, b) {
        let ratio = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        if (ratio > 125){
            return 'black';
        } else {
            return 'white';
        }
    }

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: `${contrastWithBg(props.r, props.g, props.b)}`
    }

    return(
        <div style={divStyle} className = 'boxcolor'>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor;