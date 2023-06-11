import React, { Component } from 'react'

export default class Colors extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    state = { value:""};
    colors_ar = ["red", "blue", "green", "brown"]

    updateColor = (event) => {
        document.querySelector('#title').style.color = this.state.value;
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div className='m-1'>
                <h2 id='title'>Enter favorite color: {this.state.value}</h2>
                <select value={this.state.value} onChange={this.updateColor}>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </div>
        )
    }
}