import React from 'react';
import './Greetings.css';

function Greetings(props){
    return(
        <div className = 'greetings'>
            <p>{helloLanguage(props.lang)} {props.children}</p>
        </div>
    )
}

function helloLanguage (lang){
    switch (lang){
        case 'de':
            return 'Hallo';
        case 'en':
            return 'Hello';
        case 'es':
            return 'Ola';
        case 'fr':
            return 'Bonjour';
        default:
            return 'Hello';
    }
}

export default Greetings;