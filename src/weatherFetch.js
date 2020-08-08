import React from "react";

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'
//have option to click imperial or metric units for URL 
const metricOptions = [
    'imperial','metric'
    ];

class WeatherFetch extends React.Component {
      state = {
        metricOption: metricOptions[0],
        location: "New York",
        currentLocation: "",
        feelsLike: "",
        mainTemp: "",
        description: "",
        main: "",
        iconId: "",
        degrees:""
      }

    changeLocation=(e)=>{
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.location || this.state.location.length < 1) return
        if(this.state.metricOption === 'metric'){
            this.setState({
                degrees: 'Celsius'
            })
        } else {
            this.setState({
                degrees: 'Fahrenheit'
            })
        }
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.state.location+'&APPID='+key+ '&units='+this.state.metricOption)
        .then((resp) => resp.json())
        .then((data) => {
            if(data.cod === "404")  return alert("Cannot Find City")
            this.setState(({
                currentLocation: this.state.location,
                feelsLike: data.main.feels_like,
                mainTemp: data.main.temp,
                description: data.weather[0].description,
                main: data.weather[0].main,
                iconId: data.weather[0].icon
            }))
        })
    }

    componentDidMount(){
        if(!this.state.location || this.state.location.length < 1) return
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.state.location+'&APPID='+key+ '&units='+this.state.metricOption)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            if(data.cod === "404")  return
            this.setState(({
                feelsLike: data.main.feels_like,
                mainTemp: data.main.temp,
                description: data.weather[0].description,
                main: data.weather[0].main,
                iconId: data.weather[0].icon
            }))
        })
    }

    selectUnit=(e)=>{
        this.setState({
            metricOption: e.target.value
        })
    }

    render(){
        return (
            < div style={{
                width: "500px",
                margin: "0 auto",
                border: "1px solid lightgrey",
                backgroundColor: "#f1f1f1",
                borderRadius: "6px",
                boxSizing: "border-box"
            }}>
            <h1>{this.state.currentLocation} Weather Report</h1>
            <select value={this.state.metricOption} onChange={e =>this.selectUnit(e)}>
                <option value="imperial">Imperial</option>
                <option selected value="metric">Metric</option>
            </select>
            <div style={{ padding: "2rem" }}>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label for="City">Enter City Here:</label>
                    <input type="text" style={{
                        padding: "0.5rem",
                        width: "100%",
                        boxSizing: "border-box"
                        }} 
                        value={this.state.location} onChange={e => this.changeLocation(e)} />
                    <input type="submit" value="Submit" />
                </form>
    
            <h2>Main Temperature : {this.state.mainTemp} Degrees {this.state.degrees}</h2>
            <h2>Feels like: {this.state.feelsLike} Degrees {this.state.degrees}</h2>
            <h2>Weather Parameter: {this.state.main}</h2>
            <h2>Description: {this.state.escription}</h2>
            <img src={"http://openweathermap.org/img/wn/" + this.state.iconId + "@2x.png"} alt="weather-icon"/>
            </div>
            </div>
        )
    } 
}

export default WeatherFetch;