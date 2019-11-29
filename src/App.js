import React from 'react';
import {LandingPage, Contact} from './views';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/Contact" component={Contact} />
        <Route path="/hopitaux" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
