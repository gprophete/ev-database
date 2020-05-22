import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Cars from './Cars.js'

export default class SingleCar extends Component {

    state = {
            make: '',
            model: '',
            bodyType: '',
            year: Date,
            price: 0
        
    }
    componentDidMount() {
        this.getCarById()
    }
    getCarById = async () => {
        const carId = this.props.match.params.carId
        console.log('carId', carId)
        const res = await axios.get(`/api/car/${carId}`)        
        this.setState(res.data)
    }
    
    render(props) {

        return (
            <div>
                <h1 className="App">Single Car</h1>
                <div>
                    <div>{this.state.make}</div>
                    <div>{this.state.model}</div>
                    <div>{this.state.bodyType}</div>
                    <div>{this.state.year}</div>
                    <div>{this.state.price}</div>


                    
                </div>
            </div>
        )
    }
}
