import React from 'react';
import './App.css';
import WeatherFetch from './weatherFetch.js';
import FiveDayForecast from './fiveDayForecast.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <WeatherFetch />
        <FiveDayForecast />
      </div>
    )
  }
}

export default App;
