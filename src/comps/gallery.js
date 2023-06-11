import React, { Component } from 'react'

export default class Gallery extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 0;
    state = { counter: 0};
    images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg']

    next = () => {
        this.counter++;
        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter + 1 > 3) {
            this.setState({ counter: 0 });
        }
    }

    back = () => {
        this.counter--;
        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter - 1 < 0) {
            this.setState({ counter: 3 });
        }
    }
    
    render() {
        return (
            <div>
                <img className='ms-1' src={'/images/' + this.images[this.state.counter]}/>
                <button className='p-2 m-1 ms-5' onClick={this.next}> next </button>
                <button className='p-2 m-1' onClick={this.back}> back </button>
            </div>
        )
    }
}