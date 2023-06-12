import React, { Component } from 'react'

export default class Colors extends Component {
    colorRef = React.createRef();

    // updateColor = (event) => {
    //     this.setState({color: event.target.value})
    // }

    render() {
        return (
            <div className='m-1'>
                <h2 style={{color:this.colorRef.current.value}}>Enter favorite color: {this.colorRef.current.value}</h2>
                <select ref={this.colorRef}>
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