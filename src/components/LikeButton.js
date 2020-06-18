import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
    state = {
        counter: 0,
        colors: ['purple','blue','green','yellow','orange','red'],
        bgColor: 0,
        like: 'Like'
    };

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
            //random color
            bgColor: Math.floor(Math.random()*this.state.colors.length)
        })

        this.state.counter < 1 ? this.setState({like: 'Like'}) : this.setState({like: 'Likes'})
    }

    render() {
        return(
            <button className="likebtn" style={{backgroundColor: this.state.colors[this.state.bgColor]}} onClick = {this.incrementCounter}>{this.state.counter} {this.state.like}</button>
        )
    }
    
}

export default LikeButton;