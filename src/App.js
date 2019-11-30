import React from 'react';
import {LandingPage, ContactPage} from './views';
import {Hospitals} from './components';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
var hist = createBrowserHistory();
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import {hospitals} from './data.js';

function App() {

  React.useEffect(() => {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });
}, []);

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/hopitaux" exact component={HospitalsMap} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
