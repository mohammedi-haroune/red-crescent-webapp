import React from 'react';
import {Hospitals, Contact} from './components';
import './App.css';
import {hospitals} from './data.js';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}> HOPITAUX </h1>
      <Hospitals hospitals={hospitals} />
      <Contact />
    </div>
  );
}

export default App;
