import React, { Component } from 'react'

export default class Movies extends Component {
    movieRef = React.createRef();

    render() {
        return (
            <div className='m-1'>
                <h2>Choose your favorite movie</h2>
                <select ref={this.movieRef}>
                    <option value="">Choose yoyr option</option>
                    <option value="simpsons">Simpsons</option>
                    <option value="king_lions">king lion</option>
                    <option value="bugs_buny">bugs buny</option>
                </select>
                <img src={'/images_movies/' + this.movieRef.current.value + '.jpg'} className='ms-3' style={{width: '170px'}}/>
            </div>
        )
    }
}