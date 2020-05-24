import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cars from './components/Cars.js'
import Home from './components/Home.js'
import SingleCar from './components/SingleCar.js'
import NavBar from './components/NavBar.js'
import EditCar from './components/EditCar.js'
import Features from './components/Features.js'
import SingleFeature from './components/SingleFeature.js'
import Benefits from './components/Benefits.js'
import SingleBenefit from './components/SingleBenefit.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App" className="back-img">
       
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/home" component={Home}/>

            <Route exact path = "/cars">
              <Cars 
              newCar={this.props.newCar} />
            </Route>
            <Route exact path="/car/:carId" component={SingleCar}/>
            <Route exact path="/car/:carId/edit" component={EditCar}/>
            <Route exact path="/features" component={Features}/>
            <Route exact path="/feature/:featureId" component={SingleFeature}/>
            <Route exact path="/benefits" component={Benefits}/>
            <Route exact path="/benefit/:benefitId" component={SingleBenefit}/>

          </Switch>
        </Router>
      </div>
    )
  }
}






