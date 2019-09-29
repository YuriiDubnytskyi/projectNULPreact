import React from 'react';
import '../css/App.css';
import Nav from './Nav.js';
import Section from "./Section.js"
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
        <div>
            <Nav />
            <Section />
        </div>
      </BrowserRouter>
      /*<div className="App">
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
    </div>*/

  );
}



export default App;
