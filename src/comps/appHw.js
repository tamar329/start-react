import React, {Component } from "react";
import Massage from "./message";

export default class AppHw extends Component {
    render() {
        return (
            <div className="container">
                <Message msg="First 1" bg="red" />
                <Message msg="second 2" bg="rgb(0, 255,255)" />
                <hr/>
                
            </div>
        )
    }
}