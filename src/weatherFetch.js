import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = `${process.env.REACT_APP_API_KEY}`;
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&APPID='+key+ '&units=metric')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIconID(data.weather[0].icon);
        })
    },[])
    return (
        <>
        <h2>Main Temperature : {mainTemp} Degrees Celsius</h2>
        <h2>Feels like: {feels_like} Degrees Celsius</h2>
        <h2>Weather Parameter: {main}</h2>
        <h2>Description: {description}</h2>
        <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
        </>
    )
}

export default WeatherFetch;