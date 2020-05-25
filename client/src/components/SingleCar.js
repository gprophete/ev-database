import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Cars from './Cars.js'
import { Link } from 'react-router-dom'
import style from './style.css'
import { Redirect } from 'react-router-dom'
import SingleFeature from './SingleFeature.js'

export default class SingleCar extends Component {

    state = {
        singleCar: {
            make: '',
            model: '',
            bodyType: '',
            year: '',
            price: 0,
            newFeature: {
                battery: '',
                range: '',
                safety: '',
                topSpeed: '',
                
            },
            feature: [],
        },
        editCarItem: false,
        redirect: false,
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
    onChange = (evt) => {
        const newState = { ...this.state }
        newState[evt.target.name] = evt.target.value
        this.setState(newState)
    }
    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const carId = this.props.match.params.carId
            await axios.put(`/api/car/${carId}`, this.state)
            this.getCarById()
        } catch (error) {
            console.log("Failed to update")
            console.log(error)

        }
        const newState = { ...this.state }
        newState.redirect = true
        this.setState(newState)

    }

    onDelete = async () => {
        try {
            const carId = this.props.match.params.carId
            await axios.delete(`/api/car/${carId}`, this.state)
            this.getCarById()
        } catch (error) {
            console.log("Failed to delete")
            console.log(error)

        }
        const newState = { ...this.state }
        newState.redirect = true
        this.setState(newState)


    }
    toggleEditForm = () => {
        const editCarItem = !this.state.editCarItem
        this.setState({ 'editCarItem': editCarItem })
    }


    
    

    

    
    render() {
        // const carId = this.props.match.params.carId
        if (this.state.redirect) {
            return (<Redirect to="/cars" />)
        }
        return (
            <div>
                <h1 className="App" >Single Car</h1>
                <div >
                    <div className="container">
                        <div>{this.state.make}</div>
                        <div>{this.state.model}</div>
                        <div>{this.state.bodyType}</div>
                        <div>{this.state.year}</div>
                        <div>${this.state.price}</div>
                    </div>

                    <div>
                        {this.state.editCarItem === true ? null
                            : <button onClick={this.toggleEditForm}>
                               <i class="fas fa-edit"></i>
                            </button>}



                        {this.state.editCarItem === true

                            ? <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    name="make"
                                    value={this.state.make}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="model"
                                    value={this.state.model}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="bodyType"
                                    value={this.state.bodyType}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="year"
                                    value={this.state.year}
                                    onChange={this.onChange} />

                                <input
                                    type="number"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChange} />


                                <input type="submit" value="Update" />
                            </form>
                            : null
                        }
                        <button onClick={this.onDelete}><i class="fas fa-trash-alt"></i></button>


                    </div>
                    
                    
                    

                </div>
               
            </div>
        )
    }
}
