import React from 'react';
import './App.css';
import WeatherFetch from './weatherFetch.js'

function App() {
  return (
    <div className="App">
      <h1>New York Weather Report</h1>
      <WeatherFetch />
    </div>
  )
}

export default App;
