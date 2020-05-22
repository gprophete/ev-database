import React, { Component } from 'react'
import axios from 'axios'

export default class EditCar extends Component {

    state ={
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

   

    render() {
        return (
            <div>

                <form onSubmit = {this.onSubmit}>
                    <input
                        type="text"
                        name="make"
                        value={this.state.make}
                        onChange={this.onChange}/>
                        <input type = "submit" value="Edit"/>
                </form>
            </div>
        )
    }
}
