import React, { Component } from 'react'

export default class Counter extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 44;
    state = { value:""};
    colors_ar = ["red", "blue", "green", "brown"]

    updateColor = (_value) => {
        this.setState({value: _value})
    }

    render() {
        return (
            <div style={{ color: this.colors_ar[this.state.counter] }}>
                <h2>Enter favorite color: {this.state.value}</h2>
                <select id='colors'>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </div>
        )
    }
}