import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cars from './components/Cars.js'
import Home from './components/Home.js'
import SingleCar from './components/SingleCar.js'
import NavBar from './components/NavBar.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
       
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/home" component={Home}/>

            <Route exact path = "/cars">
              <Cars 
              newCar={this.props.newCar} />
            </Route>
            <Route exact path="/car/:carId" component={SingleCar}/>

          </Switch>
        </Router>
      </div>
    )
  }
}






