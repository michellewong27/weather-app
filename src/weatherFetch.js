import React, {useState, useEffect} from "react";

function WeatherFetch() {
    const key = 'REACT_APP_API_KEY';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(() => {
        fetch('api.openweathermap.org/data/2.5/weather?q={Karachi}&appid=APP_KEY')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    },[])
    return (
        <>
        </>
    )
}

export default WeatherFetch;