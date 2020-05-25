import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Benefits from './Benefits.js'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export default class SingleBenefit extends Component {

    state = {
        singleBenefit: {
            maintenanceCost: 0,
            savings: 0,
        },
        formView: false,
        redirect: false,
    }
    componentDidMount() {
        this.getBenefitById()
    }
    getBenefitById = async () => {
        const benefitId = this.props.match.params.benefitId
        console.log('benefitId', benefitId)
        const res = await axios.get(`/api/benefit/${benefitId}`)
        this.setState(res.data)
    }

    editBenefitById = async () => {
        const benefitId = this.props.match.params.benefitId
        const res = await axios.put(`/api/benefit/${benefitId}`, this.state)
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
            const benefitId = this.props.match.params.benefitId
            await axios.put(`/api/benefit/${benefitId}`, this.state)
            this.getBenefitById()
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
            const benefitId = this.props.match.params.benefitId
            await axios.delete(`/api/benefit/${benefitId}`, this.state)
            this.getBenefitById()
        } catch (error) {
            console.log("Failed to delete")
            console.log(error)

        }

    }
    toggleView = () => {
        const formView = !this.state.formView
        this.setState({ formView: formView })
        console.log('formView', formView)
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/benefits" />)
        }
        return (
            <div>
                <h1 className="App">Single Benefit</h1>
                <div className="feature-container">

                    <label>Maintenance Cost:</label>
                    <div>{this.state.maintenanceCost}/year</div>
                    <label>Savings:</label>
                    <div>{this.state.savings}/year</div>

                    <div>
                        {this.state.formView === true ? null 
                        :<button onClick={this.toggleView}> 
                        <i class="fas fa-edit"></i>
                        </button> }
                        

                        {this.state.formView === true
                            ?<form onSubmit={this.onSubmit}>
                                <input
                                    type="number"
                                    name="maintenanceCost"
                                    value={this.state.maintenanceCost}
                                    onChange={this.onChange} />

                                <input
                                    type="number"
                                    name="savings"
                                    value={this.state.savings}
                                    onChange={this.onChange} />

                                <input type="submit" value="Update" />
                            </form>
                            : null
                        }

                    </div>
                    <button className="delete-btn" onClick={this.onDelete}>
                            <i class="fas fa-trash-alt"></i>
                            </button>





                </div>
            </div>
        )
    }
}
