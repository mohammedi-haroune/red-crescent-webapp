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
        <Route path="/" exact component={LandingPage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/hopitaux" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
