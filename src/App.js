

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <h1>Creating React Routes</h1>
  
          <ul>
            <li className="routes">
              <Link to="/" >Route 1</Link>
            </li>
            <li className="routes">
              <Link to="/2" >Route 2</Link>
            </li>
            <li className="routes">
              <Link to="/3" >Route 3</Link>
            </li>
          </ul>

          {routes}

        </header>

      </div>
    );
  }
}

export default App;
