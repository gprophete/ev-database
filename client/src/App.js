import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cars from './components/Cars.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Electric Vehicles</h1>
        <Router>
          <Switch>
            <Route exact path = "/" component={Cars}/>
          </Switch>
        </Router>
      </div>
    )
  }
}






