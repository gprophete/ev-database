import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Benefits from './Benefits.js'
import { Link } from 'react-router-dom'

export default class SingleBenefit extends Component {

    state = {
        singleBenefit: {
            maintenanceCost: 0,
            savings: 0,
        },
        editBenefitItem: true,
        redirect: true,
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

    }

    onDelete = async ()=>{
        try {
            const benefitId = this.props.match.params.benefitId
            await axios.delete(`/api/benefit/${benefitId}`, this.state)
            this.getBenefitById()
        } catch (error) {
            console.log("Failed to delete")
            console.log(error)

        }

    }
    toggleEditForm = () => {
        const editBenefitItem = !this.state.editBenefitItem
        this.setState = (editBenefitItem)
    }

    render() {
        return (
            <div>
                <h1 className="App">Single Benefit</h1>
                <div>
                    <label>Maintenance Cost</label>
                    <div>{this.state.maintenanceCost}</div>
                    <label>Savings</label>
                    <div>{this.state.savings}</div>
                    <div>
                    <button onClick={this.toggleEditForm}>Edit</button>

                        <form onSubmit={this.onSubmit}>
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

                        <button onClick={this.onDelete}>Delete</button>
                        

                    </div>



                </div>
            </div>
        )
    }
}
