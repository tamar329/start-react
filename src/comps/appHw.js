import React, {Component } from "react";
import Message from "./message";
import Exchange from "./exchange";
import Counter from "./counter";

export default class AppHw extends Component {
    render() {
        return (
            <div className="container">
                <Message msg="First 1" bg="red" />
                <Message msg="second 2" bg="rgb(0, 255,255)" />
                <hr/>
                <Exchange/>
                <hr/>
                <Counter/>
                
            </div>
        )
    }
}