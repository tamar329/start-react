import React, { Component } from 'react'

export default class Movies extends Component {
    movieRef = React.createRef();
    state = { movie: "" };

    changeMovie = () => {
        let selectVal = this.movieRef.current.value.toString();
        this.setState({ movie: selectVal })
    }

    render() {
        return (
            <div className='m-1'>
                <h2>Choose your favorite movie</h2>
                <select ref={this.movieRef} onChange={this.changeMovie}>
                    <option value="">Choose your option</option>
                    <option value="Simpsons">Simpsons</option>
                    <option value="king_lions">king lion</option>
                    <option value="bugs_buny">bugs buny</option>
                </select>
                <img src={'/images_movies/' + this.state.movie + '.jpg'} className='ms-3' style={{width: '170px'}}/>
            </div>
        )
    }
}
