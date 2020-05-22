import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Cars from './Cars.js'
import { Link } from 'react-router-dom'

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

    editCarById = async () => {
        const carId = this.props.match.params.carId
        const res = await axios.put(`/api/car/${carId}`, this.state)
        this.setState(res.data)

    }
    onChange = (evt) =>{
        const newState= {...this.state}
        newState[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    onSubmit = async (evt) =>{
        evt.preventDefault()
        try{
            const carId = this.props.match.params.carId
            await axios.put(`/api/car/${carId}`, this.state)
            this.getCarById()
        }catch (error) {
            console.log("Failed to create new car")
            console.log(error)
            
        }

    }

    render() {
        const carId = this.props.match.params.carId
        return (
            <div>
                <h1 className="App">Single Car</h1>
                <div>
                    <Link to={`/car/${carId}/edit`}><div>{this.state.make}</div></Link>

                    <div>{this.state.model}</div>
                    <div>{this.state.bodyType}</div>
                    <div>{this.state.year}</div>
                    <div>{this.state.price}</div>
                    <form onSubmit = {this.onSubmit}>
                    <input
                        type="text"
                        name="make"
                        value={this.state.make}
                        onChange={this.onChange}/>
                        <input type = "submit" value="Edit"/>
                </form>



                </div>
            </div>
        )
    }
}
