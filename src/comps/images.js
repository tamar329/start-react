import React, { Component } from 'react'

export default class Counter extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 0;
    state = { counter: 0};
    images = ['image1','image2','image3','image4']

    add = () => {
        this.counter++;
        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter + 1 > 5) {
            this.setState({ counter: 0 });
        }
    }
    


    render() {
        return (
            <div>
                <h2 className='ms-1'>Counter: {this.state.counter}</h2>
                <button className='p-2 m-1 ms-5' onClick={this.add}> + </button>
                <button className='p-2 m-1' onClick={this.minus}> - </button>
            </div>
        )
    }
}

