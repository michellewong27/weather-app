import React from 'react';
import './App.css';
import WeatherFetch from './weatherFetch.js'

class App extends React.Component{
  render(){
    return (
        <WeatherFetch />
    )
  }
}

export default App;
