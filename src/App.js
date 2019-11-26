import React from 'react';
import {Hospitals} from './components';
import './App.css';
import HospitalsMap from './HospitalsMap'
import './App.css';
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
    <div className="App">
      <h1 style={{textAlign:'center'}}> HOPITAUX </h1>
      <Hospitals hospitals={hospitals} />
      <HospitalsMap />
    </div>
  );
}

export default App;
