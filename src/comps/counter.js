import React, { Component } from 'react'

export default class Counter extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 0;
    state = { counter: 0};

    add = () => {
        this.counter++;
        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter + 1 > 5) {
            this.setState({ counter: 0 });
        }
    }
    
    minus = () => {
        this.counter--;
        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter - 1 < 0) {
            this.setState({ counter: 5 });
        }
    }

    render() {
        // <div style="backgournd:skyblue">
        // <div style={{background:"skyblue",padding:"8px"}}>
        return (
            <div>
                <h2 className='ms-1'>Counter: {this.state.counter}</h2>
                <button className='p-2 m-1 ms-5' onClick={this.add}> + </button>
                <button className='p-2 m-1' onClick={this.minus}> - </button>
            </div>
        )
    }
}