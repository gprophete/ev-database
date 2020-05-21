import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cars from './components/Cars.js'
import Home from './components/Home.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
       
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path = "/cars">
              <Cars 
              newCar={this.props.newCar} />
            </Route>

          </Switch>
        </Router>
      </div>
    )
  }
}






