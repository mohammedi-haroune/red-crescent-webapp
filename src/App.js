import React from 'react';
import logo from './logo.svg';
import {Hospitals} from './components';
import './App.css';
import uuid from 'uuid/v1';

const hospitals = [
  {
    id: uuid(),
    title:'CHU Mustapha Pacha',
    imageUrl: 'https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg',
    location: `36°45'46.3"N 3°03'11.4"E`
  },
  {
    id: uuid(),
    title:'CHU Mustapha Pacha',
    imageUrl: 'https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg',
    location: `36°45'46.3"N 3°03'11.4"E`
  },
  {
    id: uuid(),
    title:'CHU Mustapha Pacha',
    imageUrl: 'https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg',
    location: `36°45'46.3"N 3°03'11.4"E`
  },
  {
    id: uuid(),
    title:'CHU Mustapha Pacha',
    imageUrl: 'https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg',
    location: `36°45'46.3"N 3°03'11.4"E`
  }
]
function App() {
  return (
    <div className="App">
      <Hospitals hospitals={hospitals} />
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
