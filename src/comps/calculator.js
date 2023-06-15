import React, { Component } from 'react'

export default class Calculator extends Component {
    state = { total: 0 };
    amountRef = React.createRef();
    currencyRef = React.createRef();

    //     onAmountChange = () => {
    //         let total = this.amountRef.current.value * this.currencyRef.current.value
    //         this.setState({ total: total.toLocaleString() })
    //     }


    //     // render() {
    //     //     return (
    //     //         <div className='m-1'>
    //     //             <h4>Enter the currency you want to exchange:</h4>
    //     //             <select ref={this.currencyRef} onChange={this.onAmountChange}>
    //     //                 <option value="3.57">USD</option>
    //     //                 <option value="3.51">Euro</option>
    //     //                 <option value="3.7">Pound</option>
    //     //             </select>
    //     //             <h4>Enter the amount you want:</h4>
    //     //             <input id="amount" type="number" defaultValue="100" onInput={this.onAmountChange} />
    //     //             <h4>It will cost you {(this.state.total).toLocaleString()} NIS.</h4>
    //     //         </div>
    //     //     )
    //     // }



    //     render() {
    //         return (
    //             <div className='m-1'>
    //                 <h4>Enter the currency you want to exchange:</h4>
    //                 <select ref={this.currencyRef} onChange={this.onAmountChange}>
    //                     <option value="3.57">USD</option>
    //                     <option value="3.51">Euro</option>
    //                     <option value="3.7">Pound</option>
    //                 </select>
    //                 <h4>Enter the amount you want:</h4>
    //                 <input id="amount" type="number" defaultValue="100" onInput={this.onAmountChange} />
    //                 <h3>total:{(this.state.total).toLocaleString()} NIS</h3>
    //             </div>
    //         )
    //     }
    // }

    onAmountChange = () => {
        let total = this.amountRef.current.value * this.currencyRef.current.value
        this.setState({ total: total.toLocaleString() })
    }

    render() {
        return (
            <div className='col-md-4'>
                <h2>Enter the currency you want tp exchange</h2>
                <select ref={this.currencyRef} onChange={this.onAmountChange} className="form-select">
                    <option value="3.57">USD</option>
                    <option value="3.51">Euro</option>
                    <option value="3.7">Pound</option>
                </select>
                <h2>Enter the amount you want</h2>
                <input defaultValue="100" ref={this.amountRef} onInput={this.onAmountChange} type="number" className='form-control' />
                <h3>total:{(this.state.total).toLocaleString()} NIS</h3>
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class Exchange extends Component {
//     state = { total: 0 }
//     amountRef = React.createRef();
//     currencyRef = React.createRef();


//     onAmountChange = () => {
//         let total = this.amountRef.current.value * this.currencyRef.current.value
//         this.setState({ total: total.toLocaleString() })
//     }

//     render() {
//         return (
//             <div className='col-md-4'>
//                 <h2>Enter the currency you want tp exchange</h2>
//                 <select ref={this.currencyRef} onChange={this.onAmountChange} className="form-select">
//                     <option value="3.57">USD</option>
//                     <option value="3.51">Euro</option>
//                     <option value="3.7">Pound</option>
//                 </select>
//                 <h2>Enter the amount you want</h2>
//                 <input defaultValue="100" ref={this.amountRef} onInput={this.onAmountChange} type="number" className='form-control' />
//                 <h3>total:{(this.state.total).toLocaleString()} NIS</h3>
//             </div>
//         )
//     }
// }