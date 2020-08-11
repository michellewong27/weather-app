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
                degrees: 'C'
            })
        } else {
            this.setState({
                degrees: 'F'
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
                width: "80%",
                margin: "30px auto",
                border: "1px solid white",
                backgroundColor: "#f1f1f1",
                borderRadius: "6px",
                boxSizing: "border-box",
                justifyContent: "center"
            }}>
            <h1 style={{textAlign:"center", margin:"10px"}}>{this.state.currentLocation} Weather Report</h1>
            <select className="selectBtn" value={this.state.metricOption} onChange={e =>this.selectUnit(e)}>
                <option value="imperial">Imperial</option>
                <option defaultValue="metric">Metric</option>
            </select>
            <div className="weatherInfo">
                <form className="cityInputForm" onSubmit={e => this.handleSubmit(e)}>
                    <label style={{width:"20%", float:"left"}}>Search City:</label>
                    <input className="cityInputBox" type="text" style={{borderRadius: "15px"}}
                        value={this.state.location} onChange={e => this.changeLocation(e)} />
                    <input style={{width:"10%", margin: "10px "}}
                        type="submit" value="Submit" />
                </form>
    
            <h2>Main Temperature : {this.state.mainTemp}<span>&#176;</span> {this.state.degrees}</h2>
            <h2>Feels like: {this.state.feelsLike}<span>&#176;</span> {this.state.degrees}</h2>
            <h2>Weather Parameter: {this.state.main}</h2>
            <h2>Description: {this.state.description}</h2>
            <img src={"http://openweathermap.org/img/wn/" + this.state.iconId + "@2x.png"} alt="weather-icon"/>
            </div>
            
            </div>
        )
    } 
}

export default WeatherFetch;