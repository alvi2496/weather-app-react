import React, { useEffect, useState, useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';

export default function DailyWeather() {
    const data = useContext(WeatherContext)
    const [dailyData, setDailyData] = useState(null);

    useEffect(() => {
        if(data){
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
            ).then(
                (response) => response.json()
            ).then(
                (data) => {
                    setDailyData(data);
                }
            );
        }
    }, dailyData)

    console.log(dailyData);

    return (
        <p>Daily Weather Component</p>
    )
}