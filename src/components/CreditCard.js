import React from 'react';
import './CreditCard.css';

function CreditCard(props){
    function typeCard(type){
        return type === "Visa" ? "./img/visa.png" : "./img/master-card.svg";
    }

    function altTypeCard(type){
        return type === "Visa" ? "visa card" : "mastercard";
    }

    function formatCardNumber (num) {
        return `•••• •••• •••• ${num.slice(-4)}`
    }

    function formatExpiryMonth(month){
        return month < 9 ? '0' + month : month; 
    }

    function formatExpiryYear(year){
        return year.toString().slice(2); 
    }

    function formatExpiryDate(month, year){
        return `Expires ${formatExpiryMonth(month)}/${formatExpiryYear(year)}`;
    }

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    return(
        <div style={divStyle} className = 'creditcard'>
            <img src = {typeCard(props.type)} alt={altTypeCard(props.type)} />
            <h2>{formatCardNumber(props.number)}</h2>
            <div>
                <p>{formatExpiryDate(props.expirationMonth, props.expirationYear)}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}



export default CreditCard;