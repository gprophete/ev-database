import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Features extends Component {
    state = {
        newFeature: {
            car: '',
            battery: '',
            range: '',
            topSpeed: '',
        },
        allFeatures: [],
        formView: false
    }

    componentDidMount() {
        this.getAllFeatures()
    }


    getAllFeatures = async () => {
        try {
            const res = await axios.get('/api/feature')
            const newState = { ...this.state }
            newState.allFeatures = res.data
            this.setState(newState)
        } catch (error) {
            console.log('Failed to get all features')
            console.log(error)
        }
    }

    onChange = (evt) => {
        const newState = { ...this.state }
        newState.newFeature[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post("/api/feature", this.state.newFeature)
            this.getAllFeatures()
        } catch (error) {
            console.log("Failed to create new feature")
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
                <h1>Electric Vehicle Features</h1>

                {this.state.allFeatures.map((feature) => {
                    return (
                        <div className="feature-container">

                            <Link to={`/feature/${feature._id}`} >
                                <div>{feature.car}</div>
                            </Link>
                            <div>{feature.battery}</div>
                            <div>{feature.range}</div>
                            <div>{feature.topSpeed}</div>
                            
                        </div>
                    )
                })}
                <div>
                    {this.state.formView === true ? null :
                        <button onClick={this.toggleView} className="btn">
                            <i class="fas fa-mouse"></i>
                        </button>}

                    {this.state.formView === true
                        ? <form onSubmit={this.onSubmit}>
                            <label>Car</label>
                            <input
                                type="text"
                                name="car"
                                value={this.state.newFeature.car}
                                onChange={this.onChange} />
                            <label>Battery</label>
                            <input
                                type="text"
                                name="battery"
                                value={this.state.newFeature.battery}
                                onChange={this.onChange} />
                            <label>Range</label>
                            <input
                                type="text"
                                name="range"
                                value={this.state.newFeature.range}
                                onChange={this.onChange} />

                            <label>Top Speed</label>
                            <input
                                type="text"
                                name="topSpeed"
                                value={this.state.newFeature.bodyType}
                                onChange={this.onChange} />
                            

                            <input className="input-item" type="submit" value="Create new feature"/>
                        </form>
                        : null
                    }

                </div>


            </div>
        )
    }
}
