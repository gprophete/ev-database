import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import App from '../App.css'

export default class Cars extends Component {
    state = {
        newCar: {
            make: '',
            model: '',
            bodyType: '',
            year: '',
            price: 0
        },
        allCars: [],
        formView: false,

    }

    componentDidMount() {
        this.getAllCars()
    }


    getAllCars = async () => {
        try {
            const res = await axios.get('/api/car')
            const newState = { ...this.state }
            newState.allCars = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all cars')
            console.log(error)
        }
    }

    onChange = (evt) => {
        const newState = { ...this.state }
        newState.newCar[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post("/api/car", this.state.newCar)
            this.getAllCars()
        } catch (error) {
            console.log("Failed to create new car")
            console.log(error)

        }

    }

    toggleView = () => {
        const formView = !this.state.formView
        this.setState({ formView: formView })
        console.log('formView', formView)
    }




    render() {
        return (
            <div className='App'>
                <h2>Electric Vehicle Database</h2>
                {this.state.allCars.map((car) => {
                    return (
                        <div className="container">

                            <Link to={`/car/${car._id}`}><div>{car.make}</div></Link>
                            <div>{car.model}</div>
                            <div>{car.bodyType}</div>
                            <div>{car.year}</div>
                            <div>${car.price}</div>

                        </div>
                    )
                })}
                <div>
                    {this.state.formView === true ? 'hide' :
                        <button onClick={this.toggleView}>
                            <i class="fas fa-plus-square"></i>
                         </button>}

                    {this.state.formView === true
                        ? <form onSubmit={this.onSubmit}>
                            <label>Make</label>
                            <input
                                type="text"
                                name="make"
                                value={this.state.newCar.make}
                                onChange={this.onChange} />
                            <label>Model</label>
                            <input
                                type="text"
                                name="model"
                                value={this.state.newCar.model}
                                onChange={this.onChange} />

                            <label>Body Type</label>
                            <input
                                type="text"
                                name="bodyType"
                                value={this.state.newCar.bodyType}
                                onChange={this.onChange} />
                            <label>Year</label>
                            <input
                                type="text"
                                name="year"
                                // value={this.state.newCar.year}
                                onChange={this.onChange} />
                            <label>Price</label>
                            <input
                                type="number"
                                name="price"
                                value={this.state.newCar.price}
                                onChange={this.onChange} />

                            <input type="submit" value="Create new car" />
                        </form>
                        : null
                    }

                </div>


            </div>
        )
    }
}
