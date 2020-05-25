import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Benefits extends Component {
    state = {
        newBenefit: {
            maintenanceCost: '',
            savings: '',
        },
        allBenefits: [],
        formView: false
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
    toggleView = () => {
        const formView = !this.state.formView
        this.setState({ formView: formView })
        console.log('formView', formView)
    }





    render() {
        return (
            <div>
                <h1 className="App"> EV Benefits </h1>
                {this.state.allBenefits.map((benefit) => {
                    return (
                        <div className= "container">
                            
                            <Link to={`/benefit/${benefit._id}`}>
                                <div>{benefit.maintenanceCost}/year</div></Link>
                            <div>{benefit.savings}/year</div>
                            
                        </div>
                    )
                })}
                <div>
                {this.state.formView === true ? null :
                        <button onClick={this.toggleView} className="btn">
                            <i class="fas fa-mouse"></i>
                        </button>}
                        {this.state.formView === true  
                ?<form onSubmit={this.onSubmit}>
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
                :null
}
                </div>

            </div>
        )
    }
}
