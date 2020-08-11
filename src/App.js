import React from 'react';
import './App.css';
import WeatherFetch from './weatherFetch.js';
import FiveDayForecast from './fiveDayForecast.js';
import Navbar from './components/Navbar'
import { Route, Switch} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
        <Route path='/weather' render={() => <WeatherFetch />}/>
          <Route path='/fiveDayForecast' component={FiveDayForecast} />
          <Route exact path="/" render={() => <div> Home Page </div>} />
        </Switch>
      </div>
    )
  }
}

export default App;
