import React, { Component } from 'react'
import axios from 'axios'

export default class EditCar extends Component {

    state = {
        make: '',
        model: '',
        bodyType: '',
        year: new Date(),
        price: 0
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
            console.log("Failed to create new car")
            console.log(error)

        }

    }



    render() {
        return (
            <div>

               
            </div>
        )
    }
}
