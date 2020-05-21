import React, { Component } from 'react'


export default class Cars extends Component {
    state = {
        newCar: {
            make: String,
            model: String,
            bodyType: String,
            year: Number,
        },
        allCars: ''
    }
    getAllCars = async () =>{
        await axios
    }
    render() {
        return (
            <div>
                <h1>Welcome </h1>
            </div>
        )
    }
}
