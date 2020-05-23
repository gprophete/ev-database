import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Benefits extends Component {
    state = {
        newBenefit: {
            maintenanceCost: '',
            savings: '',
        },
        allBenefits: []
    }

    componentDidMount() {
        this.getAllBenefits()
    }


    getAllBenefits = async () => {
        try {
            const res = await axios.get('/api/benefit')
            const newState = { ...this.state }
            newState.allBenefits = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all benefits')
            console.log(error)
        }
    }

    onChange = (evt) => {
        const newState = { ...this.state }
        newState.newBenefit[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post("/api/benefit", this.state.newBenefit)
            this.getAllBenefits()
        } catch (error) {
            console.log("Failed to create new benefit")
            console.log(error)

        }

    }




    render() {
        return (
            <div>
                <h1> EV Benefits </h1>

                <form onSubmit={this.onSubmit}>
                    <label>Maintenance Cost</label>
                    <input
                        type="text"
                        name="maintenanceCost"
                        value={this.state.newBenefit.maintenancecost}
                        onChange={this.onChange} />
                    <label>Savings</label>
                    <input
                        type="text"
                        name="savings"
                        value={this.state.newBenefit.savings}
                        onChange={this.onChange} />


                    <input type="submit" value="Create new benefit" />
                </form>

                {this.state.allBenefits.map((benefit) => {
                    return (
                        <div>
                            <h2>EV</h2>
                            <Link to={`/benefit/${benefit._id}`}><div>{benefit.maintenanceCost}</div></Link>
                            <div>{benefit.savings}</div>
                            
                        </div>
                    )
                })}

            </div>
        )
    }
}
