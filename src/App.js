import React from 'react';
import {LandingPage, ContactPage} from './views';
import {Hospitals} from './components';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/hopitaux" exact component={Hospitals} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
