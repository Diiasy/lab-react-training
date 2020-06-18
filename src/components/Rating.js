import React from 'react';
import './Rating.css';

function Rating(props){
    function numberOfStars(num){
        let ratingInt = Math.round(Number(num));
        let stars = '';
        for (let i = 0; i < 5; i++){
            i < ratingInt ? stars += '★' : stars += '☆';
        }
        return stars;
    }

    return(
        <div className = 'rating'>
            {numberOfStars(props.children)}
        </div>
    )
}



export default Rating;