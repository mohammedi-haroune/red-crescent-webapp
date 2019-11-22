import React from 'react';
import logo from './logo.svg';
import {Hospitals} from './components';
import './App.css';
import {hospitals} from './data.js';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}> HOPITAUX </h1>
      <Hospitals hospitals={hospitals} />
    </div>
  );
}

export default App;
