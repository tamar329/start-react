import React, {Component} from "react";
import ViewDate from "./viewDate";

export default class AppDate extends Component {

    state = {deadline:"2023-01-01"};

    changeDate = (_newDate) => {
        this,setState({deadline:_newDate})
    }

    render() {
        return (
            <div className="container">
                <ViewDate deadline1={this.state.deadline}/>
                <InputDate changeDate={this.state.changeDate}/>
            </div>
        )
    }
}