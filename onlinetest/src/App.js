import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/login';
import { Switch, Route } from 'react-router-dom'
import { Test } from './components/testComponent/testComponent';
import { Result } from './components/result/result';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/test" exact component={Test}/>
        <Route path="" exact component={Login}/>
        <Route path="result" exact component={Result}/>
        </Switch>
       
      </div>
    );
  }
}

export default App;
