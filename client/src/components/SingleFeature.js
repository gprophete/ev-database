import React, { Component } from 'react'
import App from '../App.css'
import axios from 'axios'
import Features from './Features.js'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'



export default class SingleFeature extends Component {

    state = {
        singleFeature: {
            battery: '',
            range: '',
            safety: '',
            topSpeed: '',
        },
        formView: false,
        redirect: false,
    }
    componentDidMount() {
        this.getFeatureById()
    }
    getFeatureById = async () => {
        const featureId = this.props.match.params.featureId
        console.log('featureId', featureId)
        const res = await axios.get(`/api/feature/${featureId}`)
        this.setState(res.data)
    }

    editFeatureById = async () => {
        const featureId = this.props.match.params.featureId
        const res = await axios.put(`/api/feature/${featureId}`, this.state)
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
            const featureId = this.props.match.params.featureId
            await axios.put(`/api/feature/${featureId}`, this.state)
            this.getFeatureById()
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
            const featureId = this.props.match.params.featureId
            await axios.delete(`/api/feature/${featureId}`, this.state)
            this.getFeatureById()
        } catch (error) {
            console.log("Failed to delete")
            console.log(error)

        }
        const newState = { ...this.state }
        newState.redirect = true
        this.setState(newState)


    }
    toggleView = () => {
        const formView = !this.state.formView
        this.setState({ formView: formView })
        console.log('formView', formView)
    }


    render() {
        if (this.state.redirect) {
            return (<Redirect to="/features" />)
        }
        return (
            <div>
                <h1 className="App">Single Feature</h1>
                <div>
                    <div className="container">
                        <div>{this.state.battery}</div>
                        <div>{this.state.range}</div>
                        <div>{this.state.safety}</div>
                        <div>{this.state.topSpeed}</div>
                    </div>
                    <div>

                        {this.state.formView === true ? null
                            : <button onClick={this.toggleView} className="btn">
                                <i class="fas fa-edit"></i>
                            </button>}

                        {this.state.formView === true
                            ? <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    name="battery"
                                    value={this.state.battery}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="range"
                                    value={this.state.range}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="safety"
                                    value={this.state.safety}
                                    onChange={this.onChange} />

                                <input
                                    type="text"
                                    name="topSpeed"
                                    value={this.state.topSpeed}
                                    onChange={this.onChange} />


                                <input type="submit" value="Update" />
                            </form>
                            : null
                        }
                        <button className="delete-btn" onClick={this.onDelete}><i class="fas fa-trash-alt"></i></button>


                    </div>



                </div>
            </div>
        )
    }
}
