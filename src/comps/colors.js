import React, { Component } from 'react'

export default class Colors extends Component {
    state = { color: "" };
    colorRef = React.createRef();

    changeColor = () => {
        let selectVal = this.colorRef.current.value;
        this.setState({ color: selectVal })
    }

    render() {
        return (
            <div className='m-1'>
                <h2 style={{color: this.state.color}}>Enter favorite color: {this.state.color}</h2>
                <select ref={this.colorRef} onChange={this.changeColor}>
                    <option value="">choose your option</option>
                    <option value="red">red</option>
                    <option value="orange">orange</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </div>
        )
    }
}