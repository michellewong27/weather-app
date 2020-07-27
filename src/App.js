import React from 'react';
import './App.css';
import WeatherFetch from './weatherFetch.js'

function App() {
  return (
    <div className="App">
      <h1>Weather-Town</h1>
      <WeatherFetch />
    </div>
  );
}

export default App;
