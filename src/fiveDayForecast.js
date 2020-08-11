import React from 'react';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

class FiveDayForecast extends React.Component{
    state = {
        location: 'New York',
        dateDay1:'',
        tempDay1:'',
        feelsLikeDay1:'',
        tempMinDay1:'',
        tempMaxDay1:'',
        humidityDay1:'',
        windSpeedDay1:'',
        descriptionDay1:'',
        dateDay2:'',
        tempDay2:'',
        feelsLikeDay2:'',
        tempMinDay2:'',
        tempMaxDay2:'',
        humidityDay2:'',
        windSpeedDay2:'',
        descriptionDay2:'',
        dateDay3:'',
        tempDay3:'',
        feelsLikeDay3:'',
        tempMinDay3:'',
        tempMaxDay3:'',
        humidityDay3:'',
        windSpeedDay3:'',
        descriptionDay3:'',
        dateDay4:'',
        tempDay4:'',
        feelsLikeDay4:'',
        tempMinDay4:'',
        tempMaxDay4:'',
        humidityDay4:'',
        windSpeedDay4:'',
        descriptionDay4:'',
        dateDay5:'',
        tempDay5:'',
        feelsLikeDay5:'',
        tempMinDay5:'',
        tempMaxDay5:'',
        humidityDay5:'',
        windSpeedDay5:'',
        descriptionDay5:''
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=${key}&units=imperial`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            if(data.cod === "404")  return
            //iterate through each list array, return lists where dt_txt contains 12:00:00
                //b/c list[] manually put in might not be 12:00 always
            this.setState({
                dateDay1: data.list[5].dt_txt,
                tempDay1: data.list[5].main.temp,
                feelsLikeDay1: data.list[5].main.feels_like,
                tempMinDay1: data.list[5].main.temp_min,
                tempMaxDay1: data.list[5].main.temp_max,
                humidityDay1: data.list[5].main.humidity,
                windSpeedDay1: data.list[5].wind.speed,
                descriptionDay1: data.list[5].weather[0].description,
                dateDay2: data.list[13].dt_txt,
                tempDay2: data.list[13].main.temp,
                feelsLikeDay2: data.list[13].main.feels_like,
                tempMinDay2: data.list[13].main.temp_min,
                tempMaxDay2: data.list[13].main.temp_max,
                humidityDay2: data.list[13].main.humidity,
                windSpeedDay2: data.list[13].wind.speed,
                descriptionDay2: data.list[13].weather[0].description,
                dateDay3: data.list[21].dt_txt,
                tempDay3: data.list[21].main.temp,
                feelsLikeDay3: data.list[21].main.feels_like,
                tempMinDay3: data.list[21].main.temp_min,
                tempMaxDay3: data.list[21].main.temp_max,
                humidityDay3: data.list[21].main.humidity,
                windSpeedDay3: data.list[21].wind.speed,
                descriptionDay3: data.list[21].weather[0].description,
                dateDay4: data.list[29].dt_txt,
                tempDay4: data.list[29].main.temp,
                feelsLikeDay4: data.list[29].main.feels_like,
                tempMinDay4: data.list[29].main.temp_min,
                tempMaxDay4: data.list[29].main.temp_max,
                humidityDay4: data.list[29].main.humidity,
                windSpeedDay4: data.list[29].wind.speed,
                descriptionDay4: data.list[29].weather[0].description,
                dateDay5: data.list[37].dt_txt,
                tempDay5: data.list[37].main.temp,
                feelsLikeDay5: data.list[37].main.feels_like,
                tempMinDay5: data.list[37].main.temp_min,
                tempMaxDay5: data.list[37].main.temp_max,
                humidityDay5: data.list[37].main.humidity,
                windSpeedDay5: data.list[37].wind.speed,
                descriptionDay5: data.list[37].weather[0].description
            })
        })
    }

    render(){
        return(
            <div class="row" style={{
                width: "80%",
                margin: "30px auto",
                border: "1px solid white",
                backgroundColor: "#f1f1f1",
                borderRadius: "6px",
                boxSizing: "border-box",
                justifyContent: "center"
            }} >
                <h1 style={{textAlign:"center"}}>Five Day Forecast</h1>
                <br></br>
                <div className="column">
                    <h2>Date: {this.state.dateDay1}</h2>
                    <h2>Main temperature: {this.state.tempDay1}<span>&#176;</span>F</h2>
                    <h2>Feels like: {this.state.feelsLikeDay1}<span>&#176;</span>F</h2>
                    <h2>Max temperature: {this.state.tempMaxDay1}<span>&#176;</span>F</h2>
                    <h2>Min Temperature: {this.state.tempMinDay1}<span>&#176;</span>F</h2>
                    <h2>Humidity: {this.state.humidityDay1}%</h2>
                    <h2>Wind Speed: {this.state.windSpeedDay1} mph</h2>
                    <h2>Description: {this.state.descriptionDay1}</h2>
                </div>
                <br></br>
                <div class="column">
                    <h2>Date: {this.state.dateDay2}</h2>
                    <h2>Main temperature: {this.state.tempDay2}<span>&#176;</span>F</h2>
                    <h2>Feels like: {this.state.feelsLikeDay2}<span>&#176;</span>F</h2>
                    <h2>Max temperature: {this.state.tempMaxDay2}<span>&#176;</span>F</h2>
                    <h2>Min Temperature: {this.state.tempMinDay2}<span>&#176;</span>F</h2>
                    <h2>Humidity: {this.state.humidityDay2}%</h2>
                    <h2>Wind Speed: {this.state.windSpeedDay2} mph</h2>
                    <h2>Description: {this.state.descriptionDay2}</h2>
                </div>
                <br></br>
                <div class="column">
                    <h2>Date: {this.state.dateDay3}</h2>
                    <h2>Feels like: {this.state.feelsLikeDay3}<span>&#176;</span>F</h2>
                    <h2>Max temperature: {this.state.tempMaxDay3}<span>&#176;</span>F</h2>
                    <h2>Min Temperature: {this.state.tempMinDay3}<span>&#176;</span>F</h2>
                    <h2>Main temperature: {this.state.tempDay3}<span>&#176;</span>F</h2>
                    <h2>Humidity: {this.state.humidityDay3}%</h2>
                    <h2>Wind Speed: {this.state.windSpeedDay3} mph</h2>
                    <h2>Description: {this.state.descriptionDay3}</h2>
                </div>
                <br></br>
                <div class="column">
                    <h2>Date: {this.state.dateDay4}</h2>
                    <h2>Feels like: {this.state.feelsLikeDay4}<span>&#176;</span>F</h2>
                    <h2>Max temperature: {this.state.tempMaxDay4}<span>&#176;</span>F</h2>
                    <h2>Min Temperature: {this.state.tempMinDay4}<span>&#176;</span>F</h2>
                    <h2>Main temperature: {this.state.tempDay4}<span>&#176;</span>F</h2>
                    <h2>Humidity: {this.state.humidityDay4}%</h2>
                    <h2>Wind Speed: {this.state.windSpeedDay4} mph</h2>
                    <h2>Description: {this.state.descriptionDay4}</h2>
                </div>
                <br></br>
                <div class="column">
                    <h2>Date: {this.state.dateDay5}</h2>
                    <h2>Feels like: {this.state.feelsLikeDay5}<span>&#176;</span>F</h2>
                    <h2>Max temperature: {this.state.tempMaxDay5}<span>&#176;</span>F</h2>
                    <h2>Min Temperature: {this.state.tempMinDay5}<span>&#176;</span>F</h2>
                    <h2>Main temperature: {this.state.tempDay5}<span>&#176;</span>F</h2>
                    <h2>Humidity: {this.state.humidityDay5}%</h2>
                    <h2>Wind Speed: {this.state.windSpeedDay5} mph</h2>
                    <h2>Description: {this.state.descriptionDay5}</h2>
                </div>
            </div>
        )
    }
}

export default FiveDayForecast;