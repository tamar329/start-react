import React, {Component} from "react";

export default class Exchange extends Component {
    state = {total:0}
    amountRef = React.createRef();
    currencyRef = React.createRef();

    onAmountCanghe = () => {
        let total = this.amountRef.current.value * this.currencyRef.current.value;
        this.setState({total:total.toLocaleString()})
    }

    render() {
        return (
            <div className="col-md-4">
                <h2>Enter the currencyRyL</h2>
                <select rel={this.currencyRef} onChange={this.onAmountCanghe} className="form-select">
                    <option value="3.57">USD</option>
                    <option value="3.51">Euro</option>
                    <option value="3.7">Pound</option>
                </select>
                <h2>Enter the amount you want</h2>
                <input defaultValue={"1000"} ref={this.amountRef} onInput={this.onAmountCanghe} type="number" className="'form-control"/>
                <h3>total:{this.state.total} NIS</h3>
            </div>
        )
    }
}