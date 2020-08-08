import React from 'react';

const key = 'b9f87ca9b549d0ea2a00970ff58a0d34'

class FiveDayForecast extends React.Component{
    state = {
        location: "New York"
    }

    componentDidMount(){
        fetch(`api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=${key}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
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
            </div>
        )
    }
}

export default FiveDayForecast;