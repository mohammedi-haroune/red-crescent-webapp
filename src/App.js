import React from 'react';
import HospitalsMap from './components/HospitalsMap'
import './App.css';
import "leaflet/dist/leaflet.css"


function App() {

  React.useEffect(() => {
  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });
}, []);

  return (
    <div className="App">
      <HospitalsMap />
    </div>
  );
}

export default App;
