import React from 'react';
import logo from './logo.svg';
import {HospitalCard} from './components';
import './App.css';

const hospital = {
  title:'CHU Mustapha Pacha',
  imageUrl: 'https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg',
  location: `36°45'46.3"N 3°03'11.4"E`
}
function App() {
  return (
    <div className="App">
      <HospitalCard hospital={hospital} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
