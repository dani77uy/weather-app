import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather app (aplicaci&oacute;n del clima)!
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
