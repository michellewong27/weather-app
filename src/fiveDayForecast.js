import React from 'react';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

class FiveDayForecast extends React.Component{
    state = {
        location: 'New York',
        temp:'',
        feelsLike:'',
        tempMin:'',
        tempMax:'',
        humidity:'',
        windSpeed:'',
        description:''
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=${key}&units=imperial`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            if(data.cod === "404")  return
            this.setState({
                temp: data.list[0].main.temp,
                feelsLike: data.list[0].main.feels_like,
                tempMin: data.list[0].main.temp_min,
                tempMax: data.list[0].main.temp_max,
                humidity: data.list[0].main.humidity,
                windSpeed: data.list[0].wind.speed,
                description: data.list[0].weather[0].description
            })
        })
    }

    render(){
        return(
            <div style={{
                width: "500px",
                margin: "0 auto",
                border: "1px solid lightgrey",
                backgroundColor: "#f1f1f1",
                borderRadius: "6px",
                boxSizing: "border-box"
            }}>
                <h1>Five Day Forecast</h1>
                <h2>{this.state.temp}</h2>
                <h2>{this.state.feelsLike}</h2>
                <h2>{this.state.tempMax}</h2>
                <h2>{this.state.tempMin}</h2>
                <h2>{this.state.humidity}</h2>
                <h2>{this.state.windSpeed}</h2>
                <h2>{this.state.description}</h2>
            </div>
        )
    }
}

export default FiveDayForecast;